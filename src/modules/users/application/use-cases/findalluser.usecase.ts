import { Inject, Injectable } from "@nestjs/common";
import { USER_REPOSITORY } from "../../users.tokens";
import type { UserRepository } from "../../domain/repositories/user.repositories";
import { User } from "../../domain/entites/user.entity";

@Injectable()
export class findAllUser{

    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository:UserRepository
    ){}

    async execute () : Promise<User[] | null >{
        return await this.userRepository.findAll()
    }
}