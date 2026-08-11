import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { WorkOutService } from './work-out.service';
import { CurrentUser } from '../modules/auth/decorators/current-user.decorator';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { JwtAuthGuard } from '../modules/auth/infrastructure/jwt/jwt.auth.guard';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Controller('work-out')
@UseGuards(JwtAuthGuard)
export class WorkOutController {

    constructor(
        private readonly workoutservice: WorkOutService
    ){}


    @Get('preloaded')
    getPreloadedWorkout(){
        return this.workoutservice.getPreloadedWorkouts();
    }

    @Post()
    async create (
        @CurrentUser() user: {id:string},
        @Body() dto: CreateWorkoutDto,
    ){
        return this.workoutservice.create(user.id, dto)
    }

    @Get()
    async findAll(
        @CurrentUser() user: {id: string},
    ){
        return this.workoutservice.findAll(user.id)
    }

    @Patch(':id')
    async update(
        @CurrentUser() user: {id: string},
        @Param('id') workoutId:string,
        @Body() dto: UpdateWorkoutDto
    ){
        return this.workoutservice.update(
            user.id,
            dto,
            workoutId,
            
        )
    }
    @Delete(':id')
    async delete(
        @CurrentUser() user: {id:string},
        @Param('id') workoutId:string,
    ){
        await this.workoutservice.delete(
            user.id,
            workoutId,
        )
    }
}
