import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { Book } from './book.model';

@Injectable()
export class BookRepository {
    constructor(
        @InjectModel(Book)
        private readonly book: typeof Book
    ){}

    async create(title:string, publisher:string, year:number, author:string){
        await this.book.create({
            title,
            publisher,
            year,
            authorId:author
        })
    }

    async getAllByAuthor(author:string){
        return await this.book.findAll({
            where:{authorId:author}
        })
    }

    async update(id:number, title?:string, publisher?:string, year?:number, author?:string){
        return await this.book.update({title,publisher,year,author},{
            where:{id}
        })
    }

    async delete(id:number){
        await this.book.destroy({
            where:{id}
        })
    }
}
