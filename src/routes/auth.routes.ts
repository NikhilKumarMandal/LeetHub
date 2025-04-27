import express from "express"
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/CredentialService";
import { AuthService } from "../services/AuthService";
import logger from "../utils/logger";
import { TokenService } from "../services/TokenService";

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

router.post("/register",authController.register)

router.post("/login",authController.login)

export default router;