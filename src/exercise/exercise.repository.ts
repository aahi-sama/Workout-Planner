import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExerciseEntity } from "./exercise.entity";
import { Repository } from "typeorm";


@Injectable()
export class ExerciseRepository {
    constructor(
    @InjectRepository(ExerciseEntity)
    private readonly repository: Repository<ExerciseEntity>
){}

    async create (exercise: ExerciseEntity) : Promise<ExerciseEntity> {
        return this.repository.save(exercise)
    }

   async findAll(workoutId: string) : Promise <ExerciseEntity[]>{
    return this.repository.find({
        where : {workoutId}
    })
   }

   async findById(exerciseId: string ) : Promise <ExerciseEntity | null > {
    return await this.repository.findOne(({
        where: {
        id:exerciseId,
        }
    }))

    
   }

   async update(exercise: ExerciseEntity) : Promise <ExerciseEntity>{
    return this.repository.save(exercise)
   }

   async delete(exercise: ExerciseEntity): Promise<void> {
    await this.repository.delete(exercise)
   }

}