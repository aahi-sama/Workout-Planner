import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutEnity } from "./workout.enttiy";
import { Repository } from "typeorm";




@Injectable()
export class WorkoutRepository {
    constructor(
        @InjectRepository(WorkoutEnity)
        private readonly repository: Repository<WorkoutEnity>
    ){}

    async create (workout: WorkoutEnity) : Promise <WorkoutEnity> {
        return this.repository.save(workout)
    }

    async findAllByUser(userId: string) : Promise<WorkoutEnity[]>{
        return this.repository.find({
            where : {
                userId
            }
        })
    }

    async findById(workoutId: string) : Promise <WorkoutEnity>{
        const workout= await this.repository.findOne({
            where: {
                id: workoutId,
                
            }

        });
        console.log('workout:', workout);
        return workout;
    }

    async update (workout: WorkoutEnity): Promise<WorkoutEnity> {
        return this.repository.save(workout);
    }

    async delete (workout: WorkoutEnity) : Promise <string> {
        await this.repository.delete(workout.id)
        return "workout deleted Sucessfully"
    }
}