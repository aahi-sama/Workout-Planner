import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "../../users.tokens";
import type { UserRepository } from "../../domain/repositories/user.repositories";
import { User } from '../../domain/entites/user.entity';



@Injectable()
export class GetUserById {

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ){}


    async execute (id: string): Promise <User | null > {
        const user = await this.userRepository.findById(id)
        return user;
    }

}