import express, { RequestHandler } from "express";
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/Credential.service";
import { AuthService } from "../services/Auth.service";
import logger from "../utils/logger";
import { TokenService } from "../services/Token.service";
import authenticate from "../middlewares/auth.middleware";
import { upload } from "../middlewares/multer.middleware";
import { Review } from "../controllers/reviewCode.controllers";
import { ProblemService } from "../services/Problem.service";
import { checkDailyQuestionLimit } from "../middlewares/checkdailyQuateLimit.middleware";

const router = express.Router();

const authService = new AuthService();
const credentialService = new CredentialService();
const tokenService = new TokenService();
const problemService = new ProblemService();
const authController = new Auth(
  authService,
  credentialService,
  tokenService,
  logger
);

const reviewController = new Review(problemService, authService);

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/oauth2", authController.googleLogin);

router.post("/logout", authenticate, authController.logout as RequestHandler);

router.post(
  "/review",
  authenticate,
  checkDailyQuestionLimit as RequestHandler,
  reviewController.reviewUserCode as RequestHandler
);

router.get("/self", authenticate, authController.self as RequestHandler);

router.post("/refresh", authController.refresh as RequestHandler);

router.patch(
  "/update-profile",
  authenticate,
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  authController.updateProfile as RequestHandler
);

router.post(
  "/:problemId/favorite",
  authenticate,
  authController.toggleFavoriteProblem as RequestHandler
);

router.get(
  "/favorite-problems",
  authenticate,
  authController.getFavoriteProblems as RequestHandler
);

export default router;
