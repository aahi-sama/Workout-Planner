import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { WorkoutExerciseOrmEnity } from "./workout-exerciseOrm.entity";
import { WorkoutExercise } from "../../domain/entites/workout-exercise.entity";



@Entity('Exercise')
export class ExerciseOrmEnity{

    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column(
        {
            nullable: true,
        }
    )
    desciption: string | null ;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @OneToMany(
        ()=>WorkoutExerciseOrmEnity,
        (WorkoutExercise) => WorkoutExercise.exercise,
    )
    workoutExercise: WorkoutExerciseOrmEnity[]
} 