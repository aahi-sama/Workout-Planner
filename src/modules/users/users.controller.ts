import { Controller,Body,Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './application/dtos/create.user.dto';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { findAllUser } from './application/use-cases/findalluser.usecase'
import { JwtAuthGuard } from '../auth/infrastructure/jwt/jwt.auth.guard';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import type { CurrentUserData } from '../auth/application/interfaces/current-user.interface';
// @Controller('users')
// export class UsersController {}

@Controller('User')
export class UsersController {
    constructor(
        private readonly createUserUseCase:CreateUserUseCase,
        private readonly findUserUseCase:findAllUser,
        private readonly jwtservice:JwtService,
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@CurrentUser()  user: CurrentUserData ){
        return user;
    }

    @Post()
    async create (@Body() dto:CreateUserDto){
        return this.createUserUseCase.execute(dto)
    }

    @Get()
    async findAll(){
        return this.findUserUseCase.execute()
    }

    //debugging

    @Get('test-token')
    testtoken(){
        return this.jwtservice.sign({
            sub: '123',
            email: 'test@test.com'
        })
    }
}
