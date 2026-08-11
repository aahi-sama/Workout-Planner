import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WorkoutOrmEnity } from "./infrastructure/entites/workout-orm.entity";
import { ExerciseOrmEnity } from "./infrastructure/entites/exercise-orm.entity";
import { WorkoutExerciseOrmEnity } from "./infrastructure/entites/workout-exerciseOrm.entity";
import { workoutControlloer } from "./workout.controller";
import { TypeOrmWorkoutRepository } from "./infrastructure/repositories/workout.typeorm.repositories";
import { EXERCISE_REPOSITORY, WORKOUT_REPOSITORY, WORKOUTEXERCISE_REPOSITORY } from "./workout.token";
import { TypeOrmExerciseReposioty } from "./infrastructure/repositories/typeorm-exercise.reposiory";
import { TypeOrmWorkoutExerciseRepository } from "./infrastructure/repositories/typeorm-exercise-workout.repository";
import { GetPreloadedWorkoutsUseCase } from "./application/use-cases/get-preload-workout.usecase";
import { CreateWorkout } from "./application/use-cases/create-workout.usescase";
import { findAllWorkoutById } from "./application/use-cases/findAll-workout.usecase";
import { updateWorkout } from "./application/use-cases/update-workout.usecase";



@Module({
    imports : [ 
        TypeOrmModule.forFeature([
            WorkoutOrmEnity,
            ExerciseOrmEnity,
            WorkoutExerciseOrmEnity,
        ]),
    ],

    controllers: [workoutControlloer],

    providers: [ GetPreloadedWorkoutsUseCase, CreateWorkout, findAllWorkoutById, updateWorkout,
        {
            provide: WORKOUT_REPOSITORY,
            useClass: TypeOrmWorkoutRepository
        },
        {
            provide: EXERCISE_REPOSITORY,
            useClass: TypeOrmExerciseReposioty,
        },
        {
            provide: WORKOUTEXERCISE_REPOSITORY,
            useClass: TypeOrmWorkoutExerciseRepository,
        }
    ]

})

export class WorkoutModule{};