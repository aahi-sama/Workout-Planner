import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../modules/auth/infrastructure/jwt/jwt.auth.guard';
import { ExerciseService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { CurrentUser } from '../modules/auth/decorators/current-user.decorator';



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

}
