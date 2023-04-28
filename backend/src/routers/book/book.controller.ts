import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService:BookService){}

    @Get(':author')
    async getbook(@Param('author') author:string){
        return await this.bookService.getAllByAuthor(author)
    }

    @Post()
    async createbook(
        @Body(){title,publisher,year,author}:BookDto
    ){
        return await this.bookService.create(title,publisher,year,author)
    }

    @Delete(':id')
    async deletebook(        
        @Param('id') id:number
    ){
        await this.bookService.delete(id)
    }

    @Put(':id')
    async editbook(
        @Body(){title,publisher,year,author}:BookDto,
        @Param('id') id:number
    ){
        await this.bookService.update(id,title,publisher,year,author)
    }
    
}
