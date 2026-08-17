import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../../domain/repositories/user.repositories";
import { UserOrmEntity } from "../entites/user-orm.entity";
import { Repository } from "typeorm";
import { User } from "../../domain/entites/user.entity";
import { UserMapper } from "../mappers/user.mapper";
import { NotFoundException } from "@nestjs/common";

export class TypeOrmUserRepository implements UserRepository{
    constructor(
        @InjectRepository(UserOrmEntity)
        private readonly repository: Repository<UserOrmEntity>,
    ){}

    async save (user: User) : Promise <User> {
        const ormEnity = UserMapper.toOrm(user);
        const savedUser = await this.repository.save(ormEnity);

        return UserMapper.toDomain(savedUser);
    }

    async findById(userId:string): Promise<User | null >{
        const user= await this.repository.findOne({
            where: {id:userId},

            relations : {
                workouts: {
                    exercises: true
                }
            }
            

        },
       
    )

        if(!user){
            return null;
        }

        console.log(user)

        return UserMapper.toDomain(user)
    }

    async findByEmail(email:string): Promise <User | null >{
        const user = await this.repository.findOne({
            where: {email},
              relations : {
                workouts: {
                    exercises: true
                }
            }
        })
        if(!user){
            return null ;

        }

        return UserMapper.toDomain(user)
    }

    async findAll(): Promise <User[] | null>{
        const users = await this.repository.find()

        return users.map(UserMapper.toDomain);
    }

    async update(user: User): Promise <User> {
        const ormUser = await this.repository.findOne({
            where: { id: user.id}
        });

        if(!ormUser){
            throw new NotFoundException('User Not Found')
        }

        ormUser.name = user.name;
        ormUser.email = user.email;

        const savedUser = await this.repository.save(ormUser);


        
        return UserMapper.toDomain(savedUser)
    }
    }