import { Injectable, NotFoundException } from '@nestjs/common';
import { ExerciseRepository } from './exercise.repository';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import type { ExerciseServiceInterface} from './exerciseService.interface'
import { ExerciseEntity } from './exercise.entity';
import { UpdateExerciseDto } from './dto/update-Exercise.dto';
import { WorkOutService } from '../work-out/work-out.service';

@Injectable()
export class ExerciseService implements ExerciseServiceInterface {
    constructor(
        private readonly exerciseRepository: ExerciseRepository,
        private readonly workoutservice: WorkOutService
    ){}

    async create ( userId:string,
         dto: CreateExerciseDto ): Promise <ExerciseEntity> {
        
        // const workout  =  await this.workoutservice.findById(dto.workoutId);
        // if(!workout){
        //     throw new NotFoundException('NO USER WITH THIS ID');
        // }
        // console.log(workout);
        const exercise = new ExerciseEntity();

        // exercise.userId = userId;
        exercise.workoutId = dto.workoutId;
        exercise.name = dto.name;
        exercise.set = dto.set;
        exercise.reps = dto.reps;

      
        console.log(exercise)
        return this.exerciseRepository.create(exercise)

    }

    async findById( exerciseId: string) : Promise <ExerciseEntity> {
        const exercise = await this.exerciseRepository.findById(
            exerciseId,
        );
        console.log(exercise);

        if(!exercise){
            throw new NotFoundException ('exercise not found')
        }
        return exercise;
    }

    async findAll (workoutId: string): Promise <ExerciseEntity[]> {
        return await this.exerciseRepository.findAll(workoutId)
    }

    async update ( exersideId: string, dto: UpdateExerciseDto) : Promise < ExerciseEntity> {
        const exercise =  await this.exerciseRepository.findById(
            exersideId
        )

        if(!exercise){
            throw new NotFoundException('NO EXERCISE FOUND')
        }

        if(dto.name !== undefined){
            exercise.name = dto.name
        }

        if(dto.set !== undefined){
            exercise.set = dto.set
        }

        if(dto.reps !== undefined){
            exercise.reps = dto.reps
        }

        return this.exerciseRepository.update(exercise)
    }

    async delete ( workoutId: string, exerciseId: string  ) : Promise <void> {
        const exercise = await this.exerciseRepository.findById(exerciseId)
        await this.exerciseRepository.delete(exercise)
    }

}
