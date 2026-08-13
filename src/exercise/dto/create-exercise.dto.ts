import { IsDataURI, IsInt, IsString, IsUUID, Min } from "class-validator";


export class CreateExerciseDto {


    @IsUUID()
    workoutId: string;


    @IsString()
    id: string;

    // @IsString()
    // workoutId: string;

    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    set: number;

    @IsInt()
    @Min(1)
    reps: number;

}