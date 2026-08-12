import { IsDataURI, IsInt, IsString, Min } from "class-validator";


export class CreateExerciseDto {

    @IsString()
    id: string;

    @IsString()
    workoutId: string;

    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    set: number;

    @IsInt()
    @Min(1)
    reps: number;

}