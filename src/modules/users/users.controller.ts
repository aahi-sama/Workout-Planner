import { Controller,Body,Get, Post } from '@nestjs/common';
import { CreateUserDto } from './application/dtos/create.user.dto';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
// @Controller('users')
// export class UsersController {}

@Controller('User')
export class UsersController {
    constructor(
        private readonly createUserUseCase:CreateUserUseCase,
    ){}

    @Post()
    async create (@Body() dto:CreateUserDto){
        return this.createUserUseCase.execute(dto)
    }
}
