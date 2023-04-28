import { Injectable } from '@nestjs/common';
import { BookRepository } from 'src/repositories/book/book.service';

@Injectable()
export class BookService {
    constructor(
        private readonly bookRepository:BookRepository
    ){}

    async getAllByAuthor(author:string){
        return await this.bookRepository.getAllByAuthor(author)
    }

    async create(title:string,publisher:string,year:number,author:string){
        await this.bookRepository.create(title,publisher,year,author)
    }

    async update(id:number,title?:string,publisher?:string,year?:number,author?:string){
        await this.bookRepository.update(id,title,publisher,year,author)
    }

    async delete(id:number){
        await this.bookRepository.delete(id)
    }
}
