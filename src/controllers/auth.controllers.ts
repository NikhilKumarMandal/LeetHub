import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { UserData } from "../types/types";
import { UserRole } from "../generated/prisma";
import { Logger } from "winston";
import { CredentialService } from "../services/Credential.service";
import { TokenService } from "../services/Token.service";
import { JwtPayload, verify } from "jsonwebtoken";
import { AuthRequest } from "../types/types";
import { AuthService } from "../services/Auth.service";
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary";

import axios from "axios";
import { inngest } from "../inngest/client";
import { db } from "../libs/db";

export class Auth {
  constructor(
    private authService: AuthService,
    private credentialService: CredentialService,
    private tokenService: TokenService,
    private logger: Logger
  ) {}

  register = asyncHandler(async (req: Request, res: Response) => {
    // Validate fields

    const { name, email, password } = req.body;
    // check exist or not
    const existingUser = await this.authService.findUnique({ email });

    if (existingUser) {
      throw new ApiError(400, "Alredy user existed");
    }
    // hash password
    const hashedPassword = await this.credentialService.hashPassword(
      password,
      10
    );

    const data: UserData = {
      name,
      email,
      password: hashedPassword,
      role: UserRole.USER,
    };
    // create a new user
    const newUser = await this.authService.create(data);

    // log
    this.logger.info("User created successfully", { newUser });

    res
      .status(200)
      .json(new ApiResponse(200, newUser, "User created successfully"));
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // check user already exist or not
    const user = await this.authService.findUnique({ email });

    if (!user) {
      throw new ApiError(
        400,
        "User does not exists please create your account first!"
      );
    }
    // compare password
    const comparePassword = await this.credentialService.comparePassword(
      password,
      user.password
    );

    if (!comparePassword) {
      throw new ApiError(400, "Email or Password does not match!");
    }

    const payload: JwtPayload = {
      sub: user.id,
      role: user.role,
    };

    // genrate token
    const accessToken = this.tokenService.generateAccessToken(payload);

    const refreshToken = this.tokenService.generateRefreshToken(payload);

    user.refreshToken = refreshToken;
    await this.authService.update(
      { id: user?.id },
      { refreshToken: refreshToken }
    );

    // set cookies
    res.cookie("accessToken", accessToken, {
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 2, // 2 day
      httpOnly: true,
      secure: true,
    });

    res.cookie("refreshToken", refreshToken, {
      sameSite: "none",
      maxAge: 30 * 1000 * 60 * 60 * 24, // 30 days
      httpOnly: true,
      secure: true,
    });
    // log
    this.logger.info("User login succfully", { user });

    res.status(200).json(new ApiResponse(200, user, "User login successfully"));
  });

  logout = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const userId = req.auth?.sub;
      // log
      this.logger.info("User Id", { userId });

      if (!userId) {
        throw new ApiError(401, "Unauthorized");
      }

      await this.tokenService.deleteRefreshToken(userId);
      // clear cookie
      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      res.status(200).json(new ApiResponse(200, {}, "User logout succesfully"));
    } catch (error) {
      next(error);
      return;
    }
  };

  self = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const id = req.auth?.sub;

      if (!id) {
        throw new ApiError(401, "Unauthorized");
      }

      const user = await this.authService.findUniqueSelf({ id });

      if (!user) {
        throw new ApiError(401, "Unauthorized request");
      }

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            { ...user, password: undefined },
            "User fected successfully"
          )
        );
    } catch (error) {
      next(error);
      return;
    }
  };

  refresh = asyncHandler(async (req: Request, res: Response) => {
    const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET!
    );

    const user = await this.authService.findUnique({
      id: String(decodedToken?.sub),
    });

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      // If token is valid but is used already
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const payload: JwtPayload = {
      sub: user.id,
      role: user.role,
    };

    const accessToken = this.tokenService.generateAccessToken(payload);
    const refreshToken = this.tokenService.generateRefreshToken(payload);

    user.refreshToken = refreshToken;
    await this.authService.update(
      { id: user?.id },
      { refreshToken: refreshToken }
    );

    res.cookie("accessToken", accessToken, {
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 2, // 2 day
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      sameSite: "strict",
      maxAge: 30 * 1000 * 60 * 60 * 24, // 30 days
      httpOnly: true,
    });

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refreshed"
        )
      );
  });

  updateProfile = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.authService.findUnique({ id: req.auth.sub });

      if (!user) {
        throw new ApiError(400, "User does not extist!");
      }

      const avatarData = user.avatar as { public_id: string; url: string };

      await deleteFromCloudinary(avatarData.public_id, "image");

      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      const avatarLocalPath = files?.avatar?.[0]?.path;

      const avatar = await uploadOnCloudinary(avatarLocalPath);

      const updatedUser = await this.authService.update(
        { id: user?.id },
        {
          avatar: {
            public_id: avatar?.public_id,
            url: avatar?.url,
          },
        }
      );

      const avatarUrl = updatedUser?.avatar;
      res
        .status(200)
        .json(new ApiResponse(200, avatarUrl, "User updated succesfully"));
    } catch (error) {
      next(error);
      return error;
    }
  };

  // OAuth2 client setup
  googleLogin = asyncHandler(async (req: Request, res: Response) => {
    const { token } = req.body;

    if (!token) {
      throw new ApiError(400, "Token is required!");
    }

    const googleOauthUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
    googleOauthUrl.searchParams.set("id_token", token);

    const { data } = await axios.get(googleOauthUrl.toString(), {
      responseType: "json",
    });

    let user = await this.authService.findUnique({ email: data.email });

    if (!user) {
      const hasedPassword = await this.credentialService.hashPassword(
        "random_password",
        10
      );

      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const avatarLocalPath = files?.avatar?.[0]?.path;
      console.log("avatarLocalPath", avatarLocalPath);

      let avatar = null;

      if (avatarLocalPath) {
        avatar = await uploadOnCloudinary(avatarLocalPath);
        console.log("Uploaded to Cloudinary", avatar);
      } else if (data.picture) {
        avatar = {
          public_id: "oauth-picture",
          url: data.picture,
        };
        console.log("Using OAuth picture", avatar);
      }

      const email = data.email;
      const userData: UserData = {
        name: data.name,
        email: data.email,
        avatar: {
          public_id: avatar?.public_id!,
          url: avatar?.url!,
        },
        password: hasedPassword,
        role: UserRole.USER,
      };

      user = await this.authService.create(userData);

      await inngest.send({
        name: "auth/oauth2",
        data: {
          email,
        },
      });
    }

    const payload: JwtPayload = {
      sub: user.id,
      role: user.role,
    };

    const accessToken = this.tokenService.generateAccessToken(payload);

    const refreshToken = this.tokenService.generateRefreshToken(payload);

    user.refreshToken = refreshToken;
    await this.authService.update(
      { id: user?.id },
      { refreshToken: refreshToken }
    );

    res.cookie("accessToken", accessToken, {
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 2,
      httpOnly: true,
      secure: true,
    });

    res.cookie("refreshToken", refreshToken, {
      sameSite: "none",
      maxAge: 30 * 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: true,
    });

    res.status(200).json(
      new ApiResponse(
        200,
        {
          user,
          accessToken,
          refreshToken,
        },
        "User loggedd in successfully"
      )
    );
  });

  toggleFavoriteProblem = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.auth.sub;
    const { problemId } = req.params;

    try {
      const user = await this.authService.findUniqueProblem(userId);

      if (!user) {
        throw new ApiError(404, "User not found");
      }

      const isAlreadyFavorited = user.favoriteProblems.some(
        (p: any) => p.id === problemId
      );

      const updatedUser = await this.authService.updateFavorite(
        userId,
        problemId,
        isAlreadyFavorited
      );

      res
        .status(200)
        .json(
          new ApiResponse(
            200,
            updatedUser,
            isAlreadyFavorited
              ? "Problem removed from favorites."
              : "Problem added to favorites."
          )
        );
    } catch (error) {
      next(error);
    }
  };

  getFavoriteProblems = async (
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ) => {
    const userId = req.auth.sub;
    try {
      const user = await this.authService.findUniqueProblem(userId);
      const favoriteProblems = user?.favoriteProblems ?? [];

      const favoriteProblemIds = favoriteProblems.map((p: any) => p.id);

      const solvedProblems = await db.problemSolved.findMany({
        where: {
          userId,
          problemId: { in: favoriteProblemIds },
        },
        select: {
          problemId: true,
        },
      });

      const solvedProblemIdSet = new Set(
        solvedProblems.map((p: any) => p.problemId)
      );

      const problemWithFlags = favoriteProblems.map((problem: any) => ({
        ...problem,
        isFavorite: true,
        isSolved: solvedProblemIdSet.has(problem.id),
      }));

      const responseObj = {
        totalProblems: problemWithFlags.length,
        problem: problemWithFlags,
      };

      res
        .status(200)
        .json(new ApiResponse(200, responseObj, "Fetched favorite problems."));
    } catch (error) {
      next(error);
    }
  };
}
