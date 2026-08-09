import { Workout } from "../entites/workout.entity";


export interface WorkoutRepository {
    create(workout: Workout): Promise < Workout >;

    findById(id: string): Promise < Workout >;

    // findAll(workout: Workout) : Promise <Workout []>;

    update(workout: Workout): Promise <Workout> ;

    delete(id: string): Promise <void> ;
}