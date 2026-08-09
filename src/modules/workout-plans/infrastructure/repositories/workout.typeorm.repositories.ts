import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutRepository } from "../../domain/repositories/workout.repository";
import { WorkoutOrmEnity } from "../entites/workout-orm.entity";
import { Repository } from "typeorm";
import { Workout } from "../../domain/entites/workout.entity";
import { throws } from "assert";


@Injectable()
export class TypeOrmWorkoutRepository implements WorkoutRepository {
    constructor(
        @InjectRepository (WorkoutOrmEnity)
        private readonly workoutRepository: Repository<WorkoutOrmEnity>,

    ){}

    async create(workout: Workout): Promise <Workout>{
        const entity = this.workoutRepository.create({
            id: workout.id,
            userId: workout.userId,
            name: workout.name,
            day: workout.day,
        })

        const saved = await this.workoutRepository.save(entity)

        return new Workout(
            saved.id,
            saved.userId,
            saved.name,
            saved.day,
            saved.createdAt,
            saved.updatedAt
        )
    }

    async findById(userId: string) : Promise <Workout[]> {
        const workout = await this.workoutRepository.find({
            where: {userId}
        })

        return workout.map(
            (workout) => new Workout(
                workout.id,
                workout.userId,
                workout.name,
                workout.day,
                workout.createdAt,
                workout.updatedAt,
            )
                
            
        )
    }

    async update (workout: Workout) : Promise <Workout> {
        const entity = await this.workoutRepository.preload({
            id: workout.id,
            userId: workout.userId,
            name: workout.name,
            day: workout.day,
        })

        if(!entity){
            throw new Error('workout not found')
        }

        const saved = await this.workoutRepository.save(entity)

        return new Workout(
            saved.id,
            saved.userId,
            saved.name,
            saved.day,
            saved.createdAt,
            saved.updatedAt,
        )
    }

    async delete(id: string) : Promise <void>{
        await this.workoutRepository.delete(id)
    }
}