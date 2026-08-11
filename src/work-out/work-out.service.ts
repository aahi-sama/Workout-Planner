import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkoutRepository } from './workout.repository';
import { WorkoutServiceInterface } from './workoout-service.instance';
import { CreateUserDto } from '../modules/users/application/dtos/create.user.dto';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { WorkoutEnity } from './workout.enttiy';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { PRELOADED_WORKOUTS } from './data/preloaded-workout';

@Injectable()
export class WorkOutService implements WorkoutServiceInterface {
    constructor(
        private readonly workoutRepository: WorkoutRepository
    ){}

    async create(
        userId: string,
        dto: CreateWorkoutDto,
    ) : Promise <WorkoutEnity>{
        const workout = new WorkoutEnity();

        workout.userId = userId;
        workout.preloadWorkoutId = dto.preloadWorkoutId;
        workout.weekDay = dto.weekDay;

        return this.workoutRepository.create(workout)
    } 

    async findAll(
        userId: string,
    ): Promise <WorkoutEnity[]>{
        return this.workoutRepository.findAllByUser(userId)
    }

    async findById(
        userId: string,
        workoutId: string
    ): Promise<WorkoutEnity | null >{
        const workout = await this.workoutRepository.findById(
            workoutId,userId
        );

        if(!workout){
            throw new NotFoundException('workout not found')
        }

        return workout
    }

    async update (
        userId: string,
        dto: UpdateWorkoutDto,
        wrokoutId: string,
    ): Promise<WorkoutEnity>{
        
        const workout = await this.workoutRepository.findById(
            userId,
            wrokoutId,
        )

        if(dto.preloadWorkoutId !== undefined){
            workout.preloadWorkoutId = dto.preloadWorkoutId;
        }

        if(dto.weekDay ! == undefined ){
            workout.weekDay = dto.weekDay
        }

        return this.workoutRepository.update(workout)
    }

    getPreloadedWorkouts(){
        return PRELOADED_WORKOUTS;
    }

    async delete(
        userId: string,
        workoutId: string,
    ) : Promise<void> {

        const workout = await this.workoutRepository.findById(
            userId, workoutId
        )

        await this.workoutRepository.delete(workout)
    } 
}
