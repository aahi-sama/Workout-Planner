import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { typeOrmConfig } from "../infrastructure/database/typeorm.config";
import { UserOrmEntity } from "../modules/users/infrastructure/entites/user-orm.entity";



export enum WeekDay {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THRUSDAY = 'THRUSDAY',
    FRIDAY ='FRIDAY',
    SATURDAY = 'SATURDAY',
}

@Entity('workoouts')
export class WorkoutEnity {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    userId: string;

    @ManyToOne(
        ()=>UserOrmEntity,
        (user) => user.workouts,
        {
            onDelete: 'CASCADE'
        }
    )

    @JoinColumn({ name: 'userId'})
    user: UserOrmEntity;

    @Column({
        type : 'enum',
        enum : WeekDay
    })
    weekDay: WeekDay;

    @Column()
    preloadWorkout: string | null;

    @Column({
        type :'timestamp', default: () => 'CURRENT_TIMESTAMP'
    })
    createdAT: Date;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    updatedAt: Date;
}