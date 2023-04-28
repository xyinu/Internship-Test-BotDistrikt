import { Global,Module } from "@nestjs/common";
import { PostgresConfigService } from "./postgres/postgres.service";
import { ConfigService } from '@nestjs/config'


@Global()
@Module({
    imports: [ConfigModule],
    providers:[PostgresConfigService, ConfigService],
    exports:[PostgresConfigService]
})
export class ConfigModule{}