import { WorkoutExercise } from "../entites/workout-exercise.entity";


export interface WorkoutExerciseRepository {

    create(workoutExercise: WorkoutExercise): Promise <WorkoutExercise> ;

    findById(id: string): Promise <WorkoutExercise | null > 

    findByWrokoutId(workoutid: string): Promise <WorkoutExercise[]> ;

    delete( id: string) : Promise < void>
}