import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { USER_REPOSITORY } from '../users/users.tokens';
import { TypeOrmUserRepository } from '../users/infrastructure/repositories/typeorm-user.repository';
import { UsersModule } from '../users/users.module';
import { RegisteruserUserCase } from './application/user-cases/register-user.usecase';
import { PASSWORD_HASHER, TOKEN_SERVICE } from './auth.token';
import { BcryptPasswordHasher } from './infrastructure/password/bcrpt-password-hasher';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenService } from './infrastructure/jwt/jwt.token.service';
import { config } from 'rxjs';
import { LoginUserUserCase } from './application/user-cases/login-user.usecase';

@Module({
    imports: [UsersModule,
        ConfigModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config:ConfigService) => ({
                // console.log(config.get('JWT_SECRET'))

                // return {

                secret:config.get<string>('JWT_SECRET'),
            })
        })
    ],
    controllers: [AuthController],
    providers:[
        {
            provide: PASSWORD_HASHER,
            useClass: BcryptPasswordHasher,
        },
        RegisteruserUserCase,LoginUserUserCase,
        {
            provide: TOKEN_SERVICE,
            useClass: JwtTokenService,
        }

    ],

})


export class AuthModule {
}
