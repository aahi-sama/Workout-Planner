import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorkoutEnity } from "../work-out/workout.enttiy";


@Entity('Exercise')
export class ExerciseEntity {

    @PrimaryGeneratedColumn('uuid')
    id:string

    // @Column()
    // userId:string;

    @Column()
    workoutId: string;

    @Column()
    name: string;

    @Column({type: 'integer'})
    set: number;

    @Column({type: 'integer'})
    reps: number;

    @ManyToOne(
        () => WorkoutEnity,
        (workout) => workout.exercises
    )

    workout: WorkoutEnity
    

}