import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateWorkout } from "./application/use-cases/create-workout.usescase";
import { JwtAuthGuard } from "../auth/infrastructure/jwt/jwt.auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { CreateWorkoutdto } from "./application/dtos/create-workout.dto";
import { userInfo } from "node:os";
import { findAllWorkoutById } from "./application/use-cases/findAll-workout.usecase";
import { updateWorkout } from "./application/use-cases/update-workout.usecase";


@Controller('workouts')
export class workoutControlloer {
    constructor(
        private readonly createworkout:CreateWorkout,
        private readonly findWorkout: findAllWorkoutById,
        private readonly updateWorkout: updateWorkout,
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async createWorkout(
        @CurrentUser() user: {id: string},
        @Body() dto: CreateWorkoutdto,
    ){
        return this.createworkout.create(user.id, dto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async find(
        @CurrentUser() user: {id:string}
    ){
        return this.findWorkout.execute(user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    async update(
        @CurrentUser() user: {id:string}
    ){
        return this.updateWorkout.execute(user.id)
    }


}