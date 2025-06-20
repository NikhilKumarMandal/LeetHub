import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types/types";
import { ApiError, asyncHandler } from "express-strategy";
import { db } from "../libs/db";
import jwt, { JwtPayload } from "jsonwebtoken";

export const canAccess = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const roleFromToken = _req.auth.role;

    if (!roles.includes(roleFromToken)) {
      throw new ApiError(403, "User does not enough permission!");
    }
    next();
  };
};

export const verifyJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Extract token from cookie or Authorization header
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Access token not found!" });
    }

    // 2. Verify token
    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECERT!
    ) as JwtPayload;

    if (!decodedToken?.id) {
      return res.status(401).json({ message: "Invalid token payload!" });
    }

    // 3. Fetch user from DB
    const user = await db.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // 4. Attach user to request
    (req as any).user = user;

    next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    return res
      .status(401)
      .json({ message: "Invalid or expired access token!" });
  }
};
