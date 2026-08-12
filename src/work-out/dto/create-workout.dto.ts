import { IsEnum, IsString, IsUUID } from "class-validator";
import { WeekDay } from "../workout.enttiy";


export class CreateWorkoutDto {

    @IsString()
    preloadWorkoutId : string;

    @IsEnum(WeekDay)
    weekDay: WeekDay


    
}