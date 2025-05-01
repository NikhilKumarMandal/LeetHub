import { NextFunction, Request, Response } from "express";
import { AuthRequest } from "../types/types";
import { ApiError } from "express-strategy";


export const canAccess = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const _req = req as AuthRequest;
    const roleFromToken = _req.auth.role;

      if (!roles.includes(roleFromToken)) {
        throw new ApiError(403, "User does not enough permission!")
    }
    next();
  };
};