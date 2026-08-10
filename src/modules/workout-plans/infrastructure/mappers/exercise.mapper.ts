import { Exercise } from "../../domain/entites/exercise.enitity";
import { ExerciseOrmEnity } from "../entites/exercise-orm.entity";

export class ExerciseMapper {
    static toDomain(exerciseOrm:ExerciseOrmEnity): Exercise{
        return new Exercise(
            exerciseOrm.id,
            exerciseOrm.name,
            exerciseOrm.desciption,
            exerciseOrm.updatedAt,
            exerciseOrm.createdAt
        );
    }

    static toPresistance(exercise: Exercise): ExerciseOrmEnity{
        const entity = new ExerciseOrmEnity();

        entity.id = exercise.id;
        entity.name = exercise.name;
        entity.desciption= exercise.description;

        return entity;
    }
}