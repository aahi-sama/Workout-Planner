import { WorkoutExercise } from "../../domain/entites/workout-exercise.entity";
import { WorkoutExerciseOrmEnity } from "../entites/workout-exerciseOrm.entity";



export class WorkoutExerciseMapper {
    static toDomain(entity: WorkoutExerciseOrmEnity): WorkoutExercise{
        return new WorkoutExercise(
            entity.id,
            entity.workoutId,
            entity.exerciseId,
            entity.set,
            entity.reps
        )
    }

    static toPresistance (workoutExercise: WorkoutExercise): WorkoutExerciseOrmEnity{
        const entity = new WorkoutExerciseOrmEnity;

        entity.id = workoutExercise.id;
        entity.workoutId = workoutExercise.workoutId;
        entity.exerciseId = workoutExercise.exerciseId;
        entity.set = workoutExercise.set;
        entity.reps = workoutExercise.reps;

        return entity;
    }
}