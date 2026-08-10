import { Workout } from "../../domain/entites/workout.entity";
import { WorkoutOrmEnity } from "../entites/workout-orm.entity";



export class WorkoutMapper {
    static toDomain(entity: WorkoutOrmEnity): Workout{
        return new Workout(
          entity.id,
          entity.userId,
          entity.name,
          entity.day,
          entity.createdAt,
          entity.updatedAt,
        )
    }

    static toPresistance(workout : Workout): WorkoutOrmEnity {
        const entity = new WorkoutOrmEnity;

        entity.id = workout.id;
        entity.userId = workout.userId;
        entity.name = workout.name;
        entity.day = workout.day;

        return entity;
    }
}