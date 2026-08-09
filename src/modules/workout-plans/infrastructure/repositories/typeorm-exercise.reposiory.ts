import { Injectable, NotFoundException } from "@nestjs/common";
import { ExerciseRepository } from "../../domain/repositories/exercise.repo";
import { InjectRepository } from "@nestjs/typeorm";
import { ExerciseOrmEnity } from "../entites/exercise-orm.entity";
import { Entity, Repository } from "typeorm";
import { Exercise } from "../../domain/entites/exercise.enitity";


@Injectable()
export class TypeOrmExerciseReposioty implements ExerciseRepository{
    constructor(
        @InjectRepository(ExerciseOrmEnity)
        private readonly exerciseRepository: Repository<ExerciseOrmEnity>
    ){}

    async create (exercise: Exercise) : Promise <Exercise> {
        const entity = await this.exerciseRepository.create({
            id: exercise.id,
            name: exercise.name,
            desciption: exercise.description,
            
        })

        const saved = await this.exerciseRepository.save(entity)

        return new Exercise (
            saved.id,
            saved. name,
            saved.desciption,
            saved.createdAt,
            saved.updatedAt
        )
    }

    async findById (id: string) : Promise <Exercise | null > {
        const exercise  = await this.exerciseRepository.findOne({
            where: {id},

        });

        if(!exercise) {
            return null 
        }

        return new Exercise (
            exercise.id,
            exercise.name,
            exercise.desciption,
            exercise.createdAt,
            exercise.updatedAt,
        )
    }

    async findAll(): Promise <Exercise[]> {
        const exercise = await this.exerciseRepository.find();

        return exercise.map(
            (exercise) => new Exercise(
                exercise.id,
                exercise.name,
                exercise.desciption,
                exercise.updatedAt,
                exercise.createdAt
            )
        )
    }

    async update(exercise: Exercise) : Promise<Exercise> {
        const  entity = await this.exerciseRepository.preload({
            id: exercise.id,
            name: exercise.name,
            desciption: exercise.description
        })

        const saved = await this.exerciseRepository.save(entity)

        return new Exercise (
            saved.id,
            saved.name,
            saved.desciption,
            saved.createdAt,
            saved.updatedAt,
        )
    } 

    async delete (id: string) : Promise <void> {
        await this.exerciseRepository.delete(id)
    }

  
}