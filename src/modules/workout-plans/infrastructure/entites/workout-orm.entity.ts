import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WeekDay } from "../../domain/enum/week-day.enum";
import { WorkoutExerciseOrmEnity } from "./workout-exerciseOrm.entity";
import { WorkoutExercise } from "../../domain/entites/workout-exercise.entity";



@Entity('Workouts')
export class WorkoutOrmEnity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    name: string;

    @Column({
        type:'enum',
        enum: WeekDay,
    })
    day: WeekDay;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @OneToMany(
        () => WorkoutExerciseOrmEnity,(WorkoutExercise)=>
            WorkoutExercise.workout
    )
    exercise: WorkoutExerciseOrmEnity[]
    
}