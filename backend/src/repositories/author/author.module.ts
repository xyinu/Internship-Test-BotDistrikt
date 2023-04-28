import { Module } from '@nestjs/common';
import { AuthorRepository } from './author.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Author } from './author.model';


@Module({
  imports: [SequelizeModule.forFeature([Author])],
  providers: [AuthorRepository],
  exports:[AuthorRepository]
})
export class AuthorRepoModule {}
