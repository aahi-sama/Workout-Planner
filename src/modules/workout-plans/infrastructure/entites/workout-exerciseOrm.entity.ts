import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { WorkoutOrmEnity } from "./workout-orm.entity";
import { Workout } from "../../domain/entites/workout.entity";
import { ExerciseOrmEnity } from "./exercise-orm.entity";


@Entity('workout_exercise')
export class WorkoutExerciseOrmEnity{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    workoutId: string;

    @Column()
    exerciseId: string;

    @Column()
    set: string

    @Column()
    reps: string;

    @ManyToOne(
        ()=>WorkoutOrmEnity,
        (Workout) => Workout.exercise,
        {
            onDelete: 'CASCADE'
        },
    )

    @JoinColumn({name: 'WorkoutId'})
    workout: WorkoutOrmEnity;

    @ManyToOne(
        () => ExerciseOrmEnity,
        (exercise) => exercise.workoutExercise,
        {
            onDelete: 'CASCADE'
        }
    )
    @JoinColumn({name: 'exerciseId'})
    exercise: ExerciseOrmEnity;
}