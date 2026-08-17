import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../modules/auth/infrastructure/jwt/jwt.auth.guard';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CurrentUser } from '../modules/auth/decorators/current-user.decorator';
import { workerData } from 'node:worker_threads';
import { UpdateExerciseDto } from './dto/update-Exercise.dto';



@UseGuards(JwtAuthGuard)
@Controller('exercise')
export class ExerciseController {

    constructor(
        private readonly exerciseService: ExerciseService,
    ){}

    @Post()
    async create (
        @CurrentUser() user: {id:string},
        // @Param('workoutId') workoutId: string, 
        @Body() dto: CreateExerciseDto,
    ){
        return this.exerciseService.create(
            user.id,
            dto,
        )
    }

    @Get('workout/:workoutId')
    async findAll(
        @Param('workoutId') workoutId: string 
    ){
        return this.exerciseService.findAll(workoutId)
    }

    @Get(':exerciseId')
    async FindById(
        @Param('exerciseId') exerciseId: string
    ){

        return this.exerciseService.findById(exerciseId)
    }

    @Patch(':exerciseId')
    async update(
        @Param('exerciseId') exerciseId: string,
        @Body () dto: UpdateExerciseDto,
    )
    {
        return this.exerciseService.update(exerciseId, dto)
    }

    @Delete(':exerciseId')
    async delete(
        @Param ('exerciseId')  exerciseId: string
    ){
        return this.exerciseService.delete(exerciseId)
    }
    

}
