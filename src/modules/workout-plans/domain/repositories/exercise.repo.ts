import { Exercise } from "../entites/exercise.enitity";


export interface ExerciseRepository {

    create(exercise: Exercise) : Promise <Exercise>;

    findById(id: string) : Promise <Exercise | null >;

    findAll(): Promise <Exercise []>;

    update(exercise: Exercise) : Promise <Exercise>;

    delete(id: string) : Promise <void>;
}