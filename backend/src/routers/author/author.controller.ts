import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorDto } from './dto/author.dto';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService:AuthorService){}

    
    @Get()
    async getAuthor(){
        return await this.authorService.getAll()
    }

    @Post()
    async createAuthor(
        @Body(){name,biography}:AuthorDto,
    ){
        return await this.authorService.create(name,biography)
    }

    @Delete(':id')
    async deleteAuthor(        
        @Param('id') id:number
    ){
        await this.authorService.delete(id)
    }

    @Put(':id')
    async editAuthor(
        @Body(){name,biography}:AuthorDto,
        @Param('id') id:number
    ){
        await this.authorService.update(id,name,biography)
    }
}
