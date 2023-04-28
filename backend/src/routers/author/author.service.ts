import { Injectable } from '@nestjs/common';
import { AuthorRepository } from 'src/repositories/author/author.service';

@Injectable()
export class AuthorService {
    constructor(
        private readonly authorRepository:AuthorRepository
    ){}

    async getAll(){
        try{
            return await this.authorRepository.getAll()
        }catch(err){
            throw err
        }
    }

    async create(name:string,biography:string){
        try{
            return await this.authorRepository.create(name,biography)
        }catch(err){
            throw err
        }
    }

    async update(id:number, name?:string, biography?:string){
        try{
            return await this.authorRepository.update(id,name,biography)
        }catch(err){
            throw err
        }
    }

    async delete(id:number){
        try{
            return await this.authorRepository.delete(id)
        }catch(err){
            throw err
        }
    }
    
}
