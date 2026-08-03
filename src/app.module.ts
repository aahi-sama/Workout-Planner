import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './infrastructure/database/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule,UsersModule,
    ConfigModule.forRoot({
      isGlobal:true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => 
        typeOrmConfig(configService)
    })
  ],
  // providers: [AppService],
})
export class AppModule {}
