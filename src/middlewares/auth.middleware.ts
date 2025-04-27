import { NextFunction, Request } from "express";
import { ApiError, asyncHandler } from "express-strategy";
import { verify } from "jsonwebtoken";
import { AuthService } from "../services/Auth.service";

export class VerifyJwt {
  constructor(private authService: AuthService) {}
  verify = asyncHandler(async (req: Request, _, next: NextFunction) => {
    // get token
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = verify(token, process.env.ACCESS_TOKEN_SECRET!);

    const user = await this.authService.findUnique({
      id: (decodedToken as any).id,
    });

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    (req as any).user = user;

    next();
  });
}
