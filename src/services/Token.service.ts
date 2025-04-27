import { JwtPayload, sign } from "jsonwebtoken";

export class TokenService{

    generateAccessToken(payload:JwtPayload) {
        const accessToken = sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET!,
            {
                expiresIn: "2d",
                issuer: "chocoLab"
            }
        );
        return accessToken;
    };

    generateRefreshToken(payload: JwtPayload) {
        const refreshToken = sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET!,
            {
                expiresIn: "30d",
                issuer: "chocoLab",
            }
        );
        return refreshToken;
    };
}