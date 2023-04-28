import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { BookRepoModule } from 'src/repositories/book/book.module';

@Module({
  imports:[BookRepoModule],
  controllers:[BookController],
  providers: [BookService]
})
export class BookModule {}
