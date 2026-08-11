import { Module } from '@nestjs/common';
import { WorkOutService } from './work-out.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEnity } from './workout.enttiy';
import { WorkOutController } from './work-out.controller';
import { WorkoutRepository } from './workout.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([WorkoutEnity])
  ],

  controllers: [ WorkOutController],

  providers: [WorkOutService, WorkOutService, WorkoutRepository], 

  exports: [WorkOutService]
})
export class WorkOutModule {}
