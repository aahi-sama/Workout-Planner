import { UpdateExerciseDto} from  './dto/update-Exercise.dto'
import { CreateExerciseDto} from './dto/create-exercise.dto'
import { ExerciseEntity } from './exercise.entity'

 export interface ExerciseServiceInterface {
    create(
        userId: string,
        //  workoutId: string,
        dto: CreateExerciseDto,
    ): Promise < ExerciseEntity >;

    findAll(
        workoutId: string,
    ): Promise <ExerciseEntity[]>

    findById(
        workoutId: string,
        exerciseId: string,
    ) : Promise <ExerciseEntity>

    update(
        workoutId: string,
          exerciseId: string,
        dto: UpdateExerciseDto,
    ) : Promise <ExerciseEntity>

    delete(
        workoutId: string,
        exerciseId: string,
    ): Promise<void>
 } 