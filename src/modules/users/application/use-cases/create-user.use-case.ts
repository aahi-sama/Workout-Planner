import { Inject } from '@nestjs/common';
import { Injectable, NotFoundException,ConflictException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create.user.dto';
import type { UserRepository } from '../../domain/repositories/user.repositories';
import { USER_REPOSITORY } from '../../users.tokens';
import { User } from '../../domain/entites/user.entity';
import { randomUUID} from 'crypto'

@Injectable()
export class CreateUserUseCase {


    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ){}


    async execute(dto:CreateUserDto) : Promise <User | null >{
        // const exsitingUser = await this.userRepository.findByEmail(dto.email)

        // if(exsitingUser){
        //     throw new ConflictException ('there is already use with this email')

        const user = new User (
            randomUUID(),
            dto.name,
            dto.email,
            dto.password,
            new Date(),
            new Date(),
        )

        const createUser = await this.userRepository.save(user)
        return createUser;

    }
}

