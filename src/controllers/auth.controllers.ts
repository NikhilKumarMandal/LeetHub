import { AuthService } from "../services/Auth.service";
import { Request, Response } from "express";
import { ApiError, ApiResponse, asyncHandler } from "express-strategy";
import { UserData } from "../types/types";
import { UserRole } from "../generated/prisma";
import { Logger } from "winston";
import { CredentialService } from "../services/Credential.service";
import { TokenService } from "../services/Token.service";
import { JwtPayload } from "jsonwebtoken";
import { validationResult } from "express-validator";

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

  logout = asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      throw new ApiError(200, "User logout successfully");
    };

    await this.tokenService.deleteRefreshToken(refreshToken);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json(
      new ApiResponse(
        200,
        {},
        "User logout succesfully"
      ));

  })
}
