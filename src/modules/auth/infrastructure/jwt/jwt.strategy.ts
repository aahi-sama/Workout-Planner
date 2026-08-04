import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){

    constructor(
        private readonly configservice:ConfigService
    ){
        //debug
        //  const secret = configservice.get<string>('JWT_SECRET');
        //  console.log('JWT_SECRET:', secret)

        super ({

           
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

            ignoreExpiration: false,

            secretOrKey: configservice.get<string>('JWT_SECRET')!,        })
    }

    
    async validate(payload: {
        sub: string,
        email: string,
    }){
        console.log('JWT PAYLOAD:', payload)
        return {
            id: payload.sub,
            email: payload.email,
        }
    }
}