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

    async findById(id:string): Promise<User | null >{
        const user= await this.repository.findOne({
            where: {id},

        })

        if(!user){
            return null;
        }

        return UserMapper.toDomain(user)
    }

    async findByEmail(email:string): Promise <User | null >{
        const user = await this.repository.findOne({
            where: {email},
        })
        if(!user){
            return null ;

        }

        return UserMapper.toDomain(user)
    }
    }