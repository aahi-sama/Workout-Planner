import { Module } from '@nestjs/common';
import { UserRepository } from './domain/repositories/user.repositories';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { USER_REPOSITORY } from './users.tokens';

@Module({
  controllers: [UsersController],
  providers: [UsersService,{
    provide: USER_REPOSITORY,
    useClass: UserRepository,
  }]
})
export class UsersModule {

    // provider : [UserRepository]
}
