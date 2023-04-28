import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { AuthorRepoModule } from 'src/repositories/author/author.module';

@Module({
  imports:[AuthorRepoModule],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
