import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthTokens, TokenPayload, TokenService } from "../../application/interfaces/token-service.interface";

@Injectable()
export class JwtTokenService implements TokenService {
    constructor(
        private readonly jwtService: JwtService,
    ) {}

    async generateTokens(payload: TokenPayload): Promise<AuthTokens> {
        const accessToken = await this.jwtService.signAsync(payload, {
            expiresIn: '15m',
        });

        const refreshToken = await this.jwtService.signAsync(payload, {
            expiresIn: '7d',
        });

        return {
            accessToken,
            refreshToken,
        };
    }
}