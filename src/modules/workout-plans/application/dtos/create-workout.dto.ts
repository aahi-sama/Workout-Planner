import { IsEnum, IsString } from "class-validator";
import { WeekDay } from "../../domain/enum/week-day.enum";



export class CreateWorkoutdto {


    @IsString()
    prelaodedWorkoutId: string;
    
    // @IsString()
    // name: string;

    @IsEnum(WeekDay)
    day: WeekDay;
}

