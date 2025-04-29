import { NextFunction, Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { UserData } from "../types/types";
import { UserRole } from "../generated/prisma";
import { Logger } from "winston";
import { CredentialService } from "../services/Credential.service";
import { TokenService } from "../services/Token.service";
import { JwtPayload, verify } from "jsonwebtoken";
import { validationResult } from "express-validator";
import { AuthRequest } from "../types/types";
import { AuthService } from "../services/Auth.service";

export class Auth {
  constructor(
    private authService: AuthService,
    private credentialService: CredentialService,
    private tokenService: TokenService,
    private logger: Logger
  ) {}

  register = asyncHandler(async (req: Request, res: Response) => {
    // Validate fields
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ApiError(400, result.array()[0].msg as string);
    }

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
    // Validate fields
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ApiError(400, result.array()[0].msg as string);
    }

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
    await this.authService.update({ id: user?.id }, "refreshToken", refreshToken);
    
    // set cookies
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
    // log
    this.logger.info("User login succfully", { user });

    res.status(200).json(
      new ApiResponse(
        200,
        user,
        "User login successfully"
      ));
  });

  logout = async (req: AuthRequest, res: Response,next:NextFunction) => {
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

    res.status(200).json(
      new ApiResponse(
        200,
        {},
        "User logout succesfully"
      ));

    } catch (error) {
      next(error);
      return;
    }
  }

  self = async (req: AuthRequest, res: Response,next:NextFunction) => {
   try {
     const id = req.auth?.sub;
     
     if (!id) {
       throw new ApiError(401, "Unauthorized");
     };
 
     const user = await this.authService.findUnique({ id });
 
     res.status(200).json(
       new ApiResponse(
         200,
         { ...user, password: undefined },
         "User fected successfully"
       ));
   } catch (error) {
     next(error);
     return;
   }
  }

  refresh = async (req: Request, res: Response,next:NextFunction) => {
     const incomingRefreshToken =
      req.cookies.refreshToken || req.body.refreshToken;
  
    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
    }
  
    try {
      const decodedToken = verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET!
      );

      const user = await this.authService.findUnique({ id: String(decodedToken?.sub) });
      
      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
      
      console.log(user);
     
      if (incomingRefreshToken !== user?.refreshToken) {
        // If token is valid but is used already
        throw new ApiError(
          401,
          "Refresh token is expired or used"
        );
      }

      const payload: JwtPayload = {
        sub: String(user.id),
        role: user.role,
      };
    
    const accessToken = this.tokenService.generateAccessToken(payload);
    const refreshToken = this.tokenService.generateRefreshToken(payload);

    user.refreshToken = refreshToken;
    await this.authService.update({ id: user?.id }, "refreshToken", refreshToken);
      
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

      return res
        .status(200)
        .json(
          new ApiResponse(
            200,
            { accessToken,refreshToken },
            "Access token refreshed"
          )
        );
    } catch (error) {
      next(error);
      return
    }
  }
}
