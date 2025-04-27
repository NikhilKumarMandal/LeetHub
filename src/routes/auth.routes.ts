import express from "express"
import { Auth } from "../controllers/auth.controllers";
import { CredentialService } from "../services/CredentialService";
import { AuthService } from "../services/AuthService";
import logger from "../utils/logger";

const router = express.Router();

const authService = new AuthService()
const credentialService = new CredentialService()




const authController = new Auth(authService,credentialService,logger)

router.post("/register",authController.register)


export default router;