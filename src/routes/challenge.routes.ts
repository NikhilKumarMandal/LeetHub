import { canAccess } from "../middlewares/canAccess.midddleware";
import express, { RequestHandler } from "express";
import authenticate from "../middlewares/auth.middleware";
import { Roles } from "../types/types";
import { Challenge } from "../controllers/challenge.controllers";
import { ChallengeService } from "../services/Challenge.service";
import challengeValidators from "../validators/challenge.validators";

const router = express.Router();

const challengeService = new ChallengeService();
const challenge = new Challenge(challengeService);

router.post(
  "/",
  challengeValidators,
  authenticate,
  canAccess([Roles.ADMIN]),
  challenge.create
);

export default router;
