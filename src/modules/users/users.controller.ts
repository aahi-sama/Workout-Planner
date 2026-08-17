import { Controller,Body,Get, Post, UseGuards, Patch, Put, Param } from '@nestjs/common';
import { CreateUserDto } from './application/dtos/create.user.dto';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { findAllUser } from './application/use-cases/findalluser.usecase'
import { JwtAuthGuard } from '../auth/infrastructure/jwt/jwt.auth.guard';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from '../auth/decorators/current-user.decorator'
import type { CurrentUserData } from '../auth/application/interfaces/current-user.interface';
import { GetProfileUseCase } from './application/use-cases/get-profile.use-case';
import { UpdateUserDto } from './application/dtos/update.user.dto';
import { UpdateUser } from './application/use-cases/update-user.use-case';
import { User } from './domain/entites/user.entity';
import { GetUserById } from './application/use-cases/get-user-by-id.use-case';
// @Controller('users')
// export class UsersController {}

@Controller('User')
export class UsersController {
    constructor(
        private readonly createUserUseCase:CreateUserUseCase,
        private readonly findUserUseCase:findAllUser,
        private readonly jwtservice:JwtService,
        private readonly getprofileUser:GetProfileUseCase,
        private readonly updateUser:UpdateUser,
        private readonly getUserById:GetUserById
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@CurrentUser()  user: CurrentUserData ){
        return this.getprofileUser.execute(user.id)
    }


    // @UseGuards(JwtAuthGuard)
    // @Get('profile')
    //     async getProfile(@CurrentUser() user: any){
    //         return user;
    //     }

    @Post()
    async create (@Body() dto:CreateUserDto){
        return this.createUserUseCase.execute(dto)
    }

    @Get()
    async findAll(){
        return this.findUserUseCase.execute()
    }

    @Get(':userId')
    async findById (@Param('userId') userId: string){
        return this.getUserById.execute(userId)
    }

    //debugging

    // @Get('test-token')
    // testtoken(){
    //     return this.jwtservice.sign({
    //         sub: '123',
    //         email: 'test@test.com'
    //     })
    // }

    @UseGuards(JwtAuthGuard)
    @Patch('profile')
    async update(
        @CurrentUser() user: CurrentUserData,
        @Body() dto: UpdateUserDto){
        return this.updateUser.execute(user.id,dto)
    }

    // @Patch('profile')
    // async update(
    //     @Body() dto: UpdateUserDto,
    //     @Param() id: User.id
    // ){
    //     return this.upda
    // }
}
