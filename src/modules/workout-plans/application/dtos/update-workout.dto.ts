import { PartialType } from "@nestjs/mapped-types";
import { CreateWorkoutdto } from "./create-workout.dto";

export class UpdateWorkoutDto extends PartialType(CreateWorkoutdto){
    
}