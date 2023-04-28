import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { Author } from './author.model';

@Injectable()
export class AuthorRepository {
    constructor(
        @InjectModel(Author)
        private readonly author: typeof Author
    ){}

    async create(name:string,biography:string){
        try{
            return await this.author.create({
                name,
                biography
            })
        }catch(err){
            throw err
        }
    }

    async getAll(){
        try{
            return await this.author.findAll()
        }catch(err){
            throw err
        }
    }

    async update(id:number,name?:string,biography?:string){
        try{
            await this.author.update({name,biography},{
                where:{id}
            })
        }catch(err){
            throw err
        }
    }

    async delete(id:number){
        try{
            await this.author.destroy({
                where:{id}
            })
        }catch(err){
            throw err
        }
    }
}
