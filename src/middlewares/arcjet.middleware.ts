import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";
import { isSpoofedBot } from "@arcjet/inspect";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["userId"],
  rules: [
    detectBot({
      mode: "DRY_RUN",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: "DRY_RUN",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
    shield({
      mode: "DRY_RUN",
    }),
  ],
});

const arcjetMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userId: string | undefined;

  const token = req.cookies?.accessToken;
  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
      console.log(decoded.id);

      userId = decoded.id || decoded.userId;
    } catch (err) {
      console.warn("Invalid JWT, falling back to IP.");
    }
  }

  const decision = await aj.protect(req, {
    userId: userId! || req.ip!,
    requested: 1,
  });

  if (decision.isDenied() || decision.results.some(isSpoofedBot)) {
    return res.status(403).json({ error: "Forbidden or spoofed bot" });
  }

  next();
};

export default arcjetMiddleware;
