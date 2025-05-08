import express, { RequestHandler } from "express";
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/Credential.service";
import { AuthService } from "../services/Auth.service";
import logger from "../utils/logger";
import { TokenService } from "../services/Token.service";
import registerValidators from "../validators/register.validators";
import loginValidators from "../validators/login.validators";
import authenticate from "../middlewares/auth.middleware";
import { upload } from "../middlewares/multer.middleware";

const router = express.Router();

const authService = new AuthService();
const credentialService = new CredentialService();
const tokenService = new TokenService();

const authController = new Auth(
  authService,
  credentialService,
  tokenService,
  logger
);

router.post("/register", registerValidators, authController.register);

router.post("/login", loginValidators, authController.login);

router.post("/oauth2", authController.googleLogin);

router.post("/logout", authenticate, authController.logout as RequestHandler);

router.get("/self", authenticate, authController.self as RequestHandler);

router.post("/refresh", authController.refresh as RequestHandler);

router.post(
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

export default router;
