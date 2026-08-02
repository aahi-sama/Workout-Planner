import { Controller,Body, Post } from '@nestjs/common';
import {  RegisteruserUserCase } from './application/user-cases/register-user.usecase';
import { RegisterUserDto } from './application/dtos/register-user.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly registeruserUseCase: RegisteruserUserCase
    ){}

    @Post('register')
    registerUser(@Body() dto: RegisterUserDto){
        return this.registeruserUseCase.execute(dto)
    }

}
