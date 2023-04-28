import { Module } from '@nestjs/common';
import { BookRepository } from './book.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';

@Module({
  imports:[SequelizeModule.forFeature([Book])],
  providers: [BookRepository],
  exports: [BookRepository]
})
export class BookRepoModule {}
