import { Module } from '@nestjs/common';
import { BookModule } from './routers/book/book.module';
import { AuthorModule } from './routers/author/author.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostgresConfigService } from './config/postgres/postgres.service';
import { RouterModule } from './routers/router.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    BookModule, 
    AuthorModule,
    SequelizeModule.forRootAsync({
      useExisting:PostgresConfigService
    }), 
    RouterModule,
    ConfigModule
  ],
})
export class AppModule {}
