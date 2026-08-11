import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



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

    

    @Column({
        type : 'enum',
        enum : WeekDay
    })
    weekDay: WeekDay;

    @Column({
        type: 'varchar', nullable: true
    })
    preloadWorkoutId: string | null;

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