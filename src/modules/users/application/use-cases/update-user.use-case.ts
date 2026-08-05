import { Inject, Injectable, ConflictException, NotFoundException, BadRequestException} from '@nestjs/common';
import { USER_REPOSITORY } from '../../users.tokens';
import type { UserRepository } from '../../domain/repositories/user.repositories';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { User } from '../../domain/entites/user.entity';
import { stringify } from 'node:querystring';

@Injectable()
export class UpdateUser {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ){}

        // if(!dto.id){
        //     throw new BadRequestException ('User id is required')
        // }

        // const exisitngUser = await this.userRepository.findById(dto.id)

        // if (!exisitngUser){
        //     throw new NotFoundException('user not found')
        // }


        // if(dto.email && dto.id )

    //     if(dto.name !== undefined){
    //         findUser.name = dto.name;
    //     }

    //     if(dto.email !== undefined){
    //         findUser.email == dto.email;
    //     }

    //     return findUser;
    // }


    async execute (userID: string, dto: UpdateUserDto ) {

        const user = await this.userRepository.findById(userID);

        if(!user){
            throw new NotFoundException('USER NOT FOUND')
        }

         if(dto.email && dto.email === user.email){
            throw new ConflictException('Email already Exits')
         }

        user.name = dto.name ?? user.name;
        user.email = dto.email ?? user.email;

        const updateUser = await this.userRepository.update(user)

        return {
            id: updateUser.id,
            name: updateUser.name,
            email: updateUser.email,
            createdt: updateUser.createdAt,
            updatedAt: updateUser.updatedAt,
        }
    }
    
}