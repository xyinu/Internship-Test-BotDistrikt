import { Table, Column, Model, HasMany, PrimaryKey, AutoIncrement, CreatedAt,UpdatedAt } from 'sequelize-typescript';
import { Book } from '../book/book.model';

@Table({tableName:'Author'})
export class Author extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id:number;

    @Column
    name:string;

    @Column
    biography:string;

    @HasMany(()=>Book,'id')
    book:Book[]

    @CreatedAt
    @Column({field:'created_at'})
    createdAt:Date

    @UpdatedAt
    @Column({field:'updated_at'})
    updatedAt:Date

}