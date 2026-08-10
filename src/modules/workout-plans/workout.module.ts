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



@Module({
    imports : [ 
        TypeOrmModule.forFeature([
            WorkoutOrmEnity,
            ExerciseOrmEnity,
            WorkoutExerciseOrmEnity,
        ]),
    ],

    controllers: [workoutControlloer],

    providers: [ 
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