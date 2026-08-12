import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm'
import { WorkoutEnity } from '../../../../work-out/workout.enttiy';

@Entity('users')
export class UserOrmEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length:100
    })
    name: string;

    @Column({
        unique: true
    })
    email:string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(
        () => WorkoutEnity, (workout) => workout.user
    )
    workouts: WorkoutEnity [];

}