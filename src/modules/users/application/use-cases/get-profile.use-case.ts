import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { USER_REPOSITORY } from "../../users.tokens";
import type { UserRepository } from "../../domain/repositories/user.repositories";





@Injectable()
export class GetProfileUseCase {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepository: UserRepository
    ){}

    async execute (userId: string) {
        const user = await this.userRepository.findById(userId);

        if(!user){
            throw new NotFoundException('user not found')
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,

        }
    }
}