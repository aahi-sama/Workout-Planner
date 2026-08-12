import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './infrastructure/database/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { WorkOutController } from './work-out/work-out.controller';
import { WorkOutModule } from './work-out/work-out.module';
import { ExerciseModule } from './exercise/exercise.module';
@Module({
  imports: [AuthModule,UsersModule,WorkOutModule,
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
    }),

    WorkOutModule,

    ExerciseModule
  ],
  controllers: [WorkOutController],
  // providers: [AppService],
})
export class AppModule {}
