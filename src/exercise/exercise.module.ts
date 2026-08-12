import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseEntity } from './exercise.entity';
import { ExerciseRepository } from './exercise.repository';

@Module({
  imports : [ 
    TypeOrmModule.forFeature([ExerciseEntity])
  ],
  providers: [ExerciseService, ExerciseRepository],
  controllers: [ExerciseController]
})
export class ExerciseModule {}
