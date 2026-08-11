import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { WORKOUT_REPOSITORY } from "../../workout.token";
import type { WorkoutRepository } from "../../domain/repositories/workout.repository";


@Injectable()
export class updateWorkout{

    constructor(
        @Inject(WORKOUT_REPOSITORY)
        private readonly workoutRepository: WorkoutRepository,
    ){}

    async execute ( userId: string){
        const workout = await this.workoutRepository.findById(userId);

        if(!workout){
            throw new BadRequestException('no user with this id')
        }

        console.log(workout)
    }
}