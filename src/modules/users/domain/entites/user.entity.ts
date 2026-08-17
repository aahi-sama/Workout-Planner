export class User {
    constructor(
        public readonly id : string,
        public name : string,
        public email: string,
        public password: string,
        public readonly createdAt: Date,
        public updatedAt: Date,
        public workouts = [],
    ){}

    getId(): string {
        return this.id; 
    }

    getEmail(): string {
        return this.email;
    }

    changeName(name:string): void {
        this.name = name;
    }
}