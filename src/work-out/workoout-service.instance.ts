
import { CreateWorkoutDto } from "./dto/create-workout.dto";
import { UpdateWorkoutDto } from "./dto/update-workout.dto";
import { WorkoutEnity } from "./workout.enttiy";



export interface WorkoutServiceInterface {
    create(
        userId: string,
        dto: CreateWorkoutDto,
    ): Promise <WorkoutEnity>;

    findAll(userId:string): Promise <WorkoutEnity[]>;

    findById(userId: string, workoutId: string): Promise <WorkoutEnity>;

    update(
        userId: string,
        dto: UpdateWorkoutDto,
        workoutId: string,
    ): Promise <WorkoutEnity> ;
    

    delete(
        userId: string,
        workoutId: string,
    ): Promise <void>
}