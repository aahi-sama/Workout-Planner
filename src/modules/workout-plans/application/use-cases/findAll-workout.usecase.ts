import { Inject, Injectable } from "@nestjs/common";
import { WORKOUT_REPOSITORY } from "../../workout.token";
import type { WorkoutRepository } from "../../domain/repositories/workout.repository";
import { TypeOrmWorkoutRepository } from "../../infrastructure/repositories/workout.typeorm.repositories";



@Injectable()

export class findAllWorkoutById {
    constructor(
        @Inject(WORKOUT_REPOSITORY)
        private readonly workoutRepository: TypeOrmWorkoutRepository
    ){}

    async execute (userId:string){
        const workout = await this.workoutRepository.findById(userId)

        return workout;
    }
}