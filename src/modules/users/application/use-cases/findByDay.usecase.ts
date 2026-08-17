import { Inject, Injectable } from "@nestjs/common";
import type { UserRepository } from "../../domain/repositories/user.repositories";
import { USER_REPOSITORY } from "../../users.tokens";


@Injectable()
export class findByDay{
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository,
    ){
    }

    async execute (weekday: string) {
        
    }
}