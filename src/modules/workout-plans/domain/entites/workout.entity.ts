import { WeekDay } from "../enum/week-day.enum";

export class Workout {
    constructor(
        public readonly id:string,
        public readonly userId: string,
        public name: string,
        public day: WeekDay,
        public createdAt: Date,
        public updatedAt: Date,
    ){}
}