import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { WORKOUT_REPOSITORY } from "../../workout.token";
import type { WorkoutRepository } from "../../domain/repositories/workout.repository";
import { Workout } from "../../domain/entites/workout.entity";
import { randomUUID } from "crypto";
import { CreateWorkoutdto } from "../dtos/create-workout.dto";
import { PRELOAD_WORKOUTS } from "../../infrastructure/preload/preload-workouts";
import { NotFoundError } from "rxjs";



@Injectable()
export class CreateWorkout {
    constructor(
        @Inject(WORKOUT_REPOSITORY)
        private readonly workoutRepository: WorkoutRepository
    ){}

   async create (userId: string, dto: CreateWorkoutdto){
        const preloadWorkout = PRELOAD_WORKOUTS.find(
            workout => workout.id === dto.prelaodedWorkoutId,
        )
        // console.log(PRELOAD_WORKOUTS)
        // console.log(dto.prelaodedWorkoutId)

        if(!preloadWorkout){
            throw new BadRequestException('Invalid prelaoded workout')
        }
        const workout = new Workout(
            randomUUID(),
            userId,
            preloadWorkout.name,
            dto.day,
            new Date(),
            new Date(),
        );

        return this.workoutRepository.create(workout);
    }
}