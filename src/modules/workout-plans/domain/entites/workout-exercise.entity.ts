export class WorkoutExercise {
    constructor(
        public readonly id: string,
        public readonly workoutId: string,
        public readonly exerciseId: string,
        public set: string,
        public reps: string,
    ){}
}