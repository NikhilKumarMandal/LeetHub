import { AuthService } from '../services/AuthService';
import { Request, Response } from "express"
import {ApiError, ApiResponse, asyncHandler} from "express-strategy"
import { UserData } from '../types/types';
import { UserRole } from '../generated/prisma';
import { Logger } from 'winston';
import { CredentialService } from '../services/CredentialService';

export class Auth {
    constructor(
        private authService: AuthService,
        private credentialService: CredentialService,
        private logger: Logger
    ) { }
    
    register = asyncHandler(async (req:Request, res:Response) => {
        const { name, email, password } = req.body;

        const existingUser = await this.authService.findUnique({ email });

        if (existingUser) {
            throw new ApiError(400, "Alredy user existed");
        };

        const hashedPassword = await this.credentialService.hashPassword(password, 10);

        const data:UserData = {
            name,
            email,
            password: hashedPassword,
            role: UserRole.USER
        }

        const newUser = await this.authService.create(data);

        this.logger.info("User created successfully", { newUser })
        
        res.status(200).json(
            new ApiResponse(
                200,
                newUser,
                "User created successfully"
            ))

    })
}