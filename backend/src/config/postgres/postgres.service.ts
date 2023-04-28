import { Injectable } from '@nestjs/common';
import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
import * as dotenv from 'dotenv'

dotenv.config()

@Injectable()
export class PostgresConfigService implements SequelizeOptionsFactory{
    constructor(){}

    createSequelizeOptions(): SequelizeModuleOptions{
        return {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            autoLoadModels:true
        }
    }

}
