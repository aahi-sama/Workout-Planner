import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './infrastructure/database/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { WorkoutModule } from './modules/workout-plans/workout.module';
@Module({
  imports: [AuthModule,UsersModule,WorkoutModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty'
        }
      }

    }),
    ConfigModule.forRoot({
      isGlobal:true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => 
        typeOrmConfig(configService)
    })
  ],
  controllers: [],
  // providers: [AppService],
})
export class AppModule {}
