import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { USER_REPOSITORY } from "../../../users/users.tokens";
import type { UserRepository } from "../../../users/domain/repositories/user.repositories";
import { PASSWORD_HASHER, TOKEN_SERVICE } from "../../auth.token";
import type { PasswordHasher } from "../interfaces/passowrd-hasher.interface";
import { User } from "../../../users/domain/entites/user.entity";
import { JwtTokenService } from "../../infrastructure/jwt/jwt.token.service";

@Injectable()
export class RegisteruserUserCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userrepository:UserRepository,

        @Inject(PASSWORD_HASHER)
        private readonly passowrdhasher:PasswordHasher,

        @Inject(TOKEN_SERVICE)
        private readonly tokenService:JwtTokenService,
    ){}
 async execute (dto: RegisterUserDto){
    const exsitingUser = await this.userrepository.findByEmail(dto.email);

    if(exsitingUser){
        throw new ConflictException('Email already exists');

    }

    const hashPassword = await this.passowrdhasher.hash(dto.password);

    const user = new User(
        crypto.randomUUID(),
        dto.name,
        dto.email,
        hashPassword,
        new Date(),
        new Date()
    );


    const createdUser = await this.userrepository.save(user);

    const tokens = await this.tokenService.generateTokens({
        sub: createdUser.id,
        email: createdUser.email,
    });
    return {
        user: createdUser,
        ...tokens,
    };
    }

 }
