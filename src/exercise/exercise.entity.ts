import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Exercise')
export class ExerciseEntity {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    workoutId: string;

    @Column()
    name: string;

    @Column({type: 'integer'})
    set: number;

    @Column({type: 'integer'})
    reps: number;

}