import { Injectable } from "@nestjs/common";
import { PRELOAD_WORKOUTS } from "../../infrastructure/preload/preload-workouts";


@Injectable()
export class GetPreloadedWorkoutsUseCase {
    execute(){
        return PRELOAD_WORKOUTS
    }
}