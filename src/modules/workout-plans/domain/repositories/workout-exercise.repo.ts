import { WorkoutExercise } from "../entites/workout-exercise.entity";


export interface WrokoutExercise {

    create(workoutExercise: WorkoutExercise): Promise <WorkoutExercise> ;

    findById(id: string): Promise <WorkoutExercise | null > 

    findByWrokoutId(workoutid: string): Promise <WorkoutExercise| null> ;

    delete( id: string) : Promise < void>
}