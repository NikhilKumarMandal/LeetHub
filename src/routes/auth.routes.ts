import express from "express"
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/Credential.service";
import { AuthService } from "../services/Auth.service";
import logger from "../utils/logger";
import { TokenService } from "../services/Token.service";
import registerValidators from "../validators/register.Validators";
import loginValidators from "../validators/login.Validators";

const router = express.Router();

const authService = new AuthService()
const credentialService = new CredentialService()
const tokenService = new TokenService()




const authController = new Auth(
    authService,
    credentialService,
    tokenService,
    logger
)

router.post("/register",registerValidators,authController.register)

router.post("/login",loginValidators,authController.login)

export default router;