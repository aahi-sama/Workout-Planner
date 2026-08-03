import { Params } from 'nestjs-pino';
//params a typescript type/interface that describes the configuration object you can
// pass to loggerModule.forRoot();

const loggerConfig: Params = {
     pinoHttp: {
        transport: {
          target: 'pino-pretty'
        }
     }
    }
