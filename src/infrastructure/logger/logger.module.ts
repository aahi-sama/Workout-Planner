import { Global, Module } from "@nestjs/common";
import { LoggerModule as PinoModule} from 'nestjs-pino'

import {loggerConfig } from './pino.config'
import { PinoLoggerService } from "./pino-logger.service";
import { LOGGER } from "../../shared/tokens/logger.token";


@Global()
@Module({
    imports: [
        PinoModule.forRoot(loggerConfig),
    ],
    providers: [
        PinoLoggerService,
        {
            provide: LOGGER,
            useExisting: PinoLoggerService,
        }
    ],
    exports: [LOGGER]
})

export class LoggerModule{}