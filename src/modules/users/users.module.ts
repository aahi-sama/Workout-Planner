import { Module } from '@nestjs/common';
import { UserRepository } from './domain/repositories/user.repositories';
import { UsersController } from './users.controller';
// import { UsersService } from './users.service';
import { USER_REPOSITORY } from './users.tokens';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmUserRepository } from './infrastructure/repositories/typeorm-user.repository';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserOrmEntity } from './infrastructure/entites/user-orm.entity';
import { UpdateUser } from './application/use-cases/update-user.use-case';
import { GetUserById } from './application/use-cases/get-user-by-id.use-case';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserOrmEntity]),
    ],
    
  controllers: [UsersController],
  providers: [CreateUserUseCase,{
    provide: USER_REPOSITORY,
    useClass:  TypeOrmUserRepository,
  },CreateUserUseCase,UpdateUser,GetUserById

],
exports: [
    USER_REPOSITORY,
]
})
export class UsersModule {

    // provider : [UserRepository]
}
