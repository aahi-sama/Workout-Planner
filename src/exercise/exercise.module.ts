import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { ExerciseRepository } from './exercise.repository';
import { WorkoutEnity } from '../work-out/workout.enttiy';
import { WorkOutService } from '../work-out/work-out.service';
import { WorkOutModule } from '../work-out/work-out.module';

@Module({
  imports : [ WorkOutModule,
    TypeOrmModule.forFeature([ExerciseEntity, WorkoutEnity])
  ],
  providers: [ExerciseService, ExerciseRepository,],
  controllers: [ExerciseController],
  exports: [
    ExerciseService,
  ]
})
export class ExerciseModule {}
