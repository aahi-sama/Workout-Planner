import { Params } from 'nestjs-pino';
//params a typescript type/interface that describes the configuration object you can
// pass to loggerModule.forRoot();

export const loggerConfig: Params = {
     pinoHttp: {
        transport:
            process.env.NODE_ENV !== 'production'? {
          target: 'pino-pretty',
          options: {
            colorize:true,
            singleLine: true,
          },
        }
        : undefined,
     }
    }
