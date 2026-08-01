import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = (
    configService: ConfigService,
): TypeOrmModuleOptions =>( {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,

    
    autoLoadEntities:true,

    synchronize: true,

});
// console.log('Database:' , process.env.DATABASE_NAME)
// console.log('Host:', process.env.DATABASE_PORT);