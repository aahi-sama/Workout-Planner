import { Injectable, Inject, UnauthorizedException } from "@nestjs/common";
import type { UserRepository } from "../../../users/domain/repositories/user.repositories";
import { USER_REPOSITORY } from "../../../users/users.tokens";
import { LoginUserDto } from "../dtos/login-user.dto";
import { dot } from "node:test/reporters";
import { PASSWORD_HASHER, TOKEN_SERVICE } from "../../auth.token";
import type { PasswordHasher } from "../interfaces/passowrd-hasher.interface";
import { JwtTokenService } from "../../infrastructure/jwt/jwt.token.service";


@Injectable()
export class LoginUserUserCase{
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,

        @Inject(PASSWORD_HASHER)
        private readonly hashedPassword: PasswordHasher,

        @Inject(TOKEN_SERVICE)
        private readonly tokenService:JwtTokenService,
    ){}


    async execute (dto:LoginUserDto){
        const user = await this.userRepository.findByEmail(dto.email)
    if(!user){
        throw new UnauthorizedException('Invalid password or email')
    }

    const isPassword = await this.hashedPassword.compare(
        dto.password,
        user.password,
    );

    if (!isPassword) {
        throw new UnauthorizedException('Invalid password or email');
    }

    const tokens = await this.tokenService.generateTokens({
        sub: user.id,
        email: user.email,
    });

    return tokens;
    }
}
