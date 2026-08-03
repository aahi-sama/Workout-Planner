import { Controller,Body,Get, Post } from '@nestjs/common';
import { CreateUserDto } from './application/dtos/create.user.dto';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { findAllUser } from './application/use-cases/findalluser.usecase'
// @Controller('users')
// export class UsersController {}

@Controller('User')
export class UsersController {
    constructor(
        private readonly createUserUseCase:CreateUserUseCase,
        private readonly findUserUseCase:findAllUser
    ){}

    @Post()
    async create (@Body() dto:CreateUserDto){
        return this.createUserUseCase.execute(dto)
    }

    @Get()
    async findAll(){
        return this.findUserUseCase.execute()
    }
}
