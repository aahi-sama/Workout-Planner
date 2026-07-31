import { Inject, Injectable, ConflictException, NotFoundException, BadRequestException} from '@nestjs/common';
import { USER_REPOSITORY } from '../../users.tokens';
import type { UserRepository } from '../../domain/repositories/user.repositories';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { User } from '../../domain/entites/user.entity';

@Injectable()
export class UpdateUser {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ){}

    async execute (dto:UpdateUserDto): Promise <User | null >{
        if(!dto.id){
            throw new BadRequestException ('User id is required')
        }

        const findUser = await this.userRepository.findById(dto.id)

        if (!findUser){
            throw new NotFoundException('usre not found')
        }

        if(dto.name !== undefined){
            findUser.name = dto.name;
        }

        if(dto.email !== undefined){
            findUser.email == dto.email;
        }

        return findUser;
    }
    
}