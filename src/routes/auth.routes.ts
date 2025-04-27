import express from "express";
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/Credential.service";
import { AuthService } from "../services/Auth.service";
import logger from "../utils/logger";
import { TokenService } from "../services/Token.service";
import registerValidators from "../validators/register.validators";
import loginValidators from "../validators/login.validators";
import { VerifyJwt } from "../middlewares/auth.middleware";

const router = express.Router();

const authService = new AuthService();
const credentialService = new CredentialService();
const tokenService = new TokenService();

const verifyJwt = new VerifyJwt(authService);

const authController = new Auth(
  authService,
  credentialService,
  tokenService,
  logger
);

router.post("/register", registerValidators, authController.register);

router.post("/login", loginValidators, authController.login);

export default router;
