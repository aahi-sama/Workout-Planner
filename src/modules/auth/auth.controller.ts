import { Controller,Body, Post } from '@nestjs/common';
import {  RegisteruserUserCase } from './application/user-cases/register-user.usecase';
import { RegisterUserDto } from './application/dtos/register-user.dto';
import { LoginUserUserCase } from './application/user-cases/login-user.usecase';
import { LoginUserDto } from './application/dtos/login-user.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly registeruserUseCase: RegisteruserUserCase,
        private readonly loginuserUseCase: LoginUserUserCase
    ){}

    @Post('register')
    registerUser(@Body() dto: RegisterUserDto){
        return this.registeruserUseCase.execute(dto)
    }

    @Post('Login')
    loginUser(@Body() dto: LoginUserDto){
        return this.loginuserUseCase.execute(dto)
    }

}
