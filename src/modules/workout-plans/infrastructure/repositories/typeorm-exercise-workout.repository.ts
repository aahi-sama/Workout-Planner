import { Injectable } from "@nestjs/common";
import { WorkoutExerciseRepository } from "../../domain/repositories/workout-exercise.repo";
import { InjectRepository } from "@nestjs/typeorm";
import { WorkoutExerciseOrmEnity } from "../entites/workout-exerciseOrm.entity";
import { Repository } from "typeorm";
import { WorkoutExercise } from "../../domain/entites/workout-exercise.entity";



@Injectable()

export class TypeOrmWorkoutExerciseRepository implements 
     WorkoutExerciseRepository{
        constructor(
            @InjectRepository(WorkoutExerciseOrmEnity)
            private readonly workoutExercise: Repository<WorkoutExerciseOrmEnity>
        ){}

        async create
        (workoutExercise: WorkoutExercise) : Promise <WorkoutExercise>{
            const entity = await this.workoutExercise.create({
                id: workoutExercise.id,
                workoutId: workoutExercise.workoutId,
                exerciseId: workoutExercise.workoutId,
                set: workoutExercise.set,
                reps: workoutExercise.reps
            })

            const saved = await this.workoutExercise.save(entity);

            return new WorkoutExercise(
                saved.id,
                saved.workoutId,
                saved.exerciseId,
                saved.set,
                saved.reps
            )
        }

        async findById (id: string) : Promise <WorkoutExercise | null > {
            const entity = await this.workoutExercise.findOne({
                where: {id},
            })

            if(!entity){
                return null
            }

            return new WorkoutExercise(
                entity.id,
                entity.exerciseId,
                entity.workoutId,
                entity.set,
                entity.reps
            )
        }

        async findByWrokoutId(workoutId: string) : Promise<WorkoutExercise[]> {
            const entity = await this.workoutExercise
                    .find({
                        where: {workoutId}
                    });

                    return entity.map(
                        (entity) => 
                        new WorkoutExercise(
                            entity.id,
                            entity.exerciseId,
                            entity.workoutId,
                            entity.set,
                            entity.reps
                        )                   )
        }

        async delete(id: string): Promise<void>{
            await this.workoutExercise.delete(id);
        }

            }