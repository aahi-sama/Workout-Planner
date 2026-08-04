import { Injectable } from "@nestjs/common";
import { Logger } from "../../shared/ports/logger.interface";
import { PinoLogger } from "nestjs-pino";



@Injectable()
export class PinoLoggerService implements Logger{
    constructor(
        private readonly logger: PinoLogger
    ){}

    log(message:string, context?:Record<string, unknown>):void{
        this.logger.info(context ?? {}, message)
    }

    warn(message:string, context?:Record<string, unknown>):void{
        this.logger.warn(context ?? {}, message)
    }

    error(
        message:string,
        trace?: string,
        context?: Record <string, unknown>):void{
            this.logger.error(
                context ?? {},trace,
            )
        }
    
}