import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Author } from '../author/author.model';

@Table({tableName:'Book'})
export class Book extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id:number;

    @Column
    title:string;

    @Column
    publisher:string;

    @Column
    year:number;

    @BelongsTo(()=>Author,{
        foreignKey:'authorId',
    })
    author:Author

    @CreatedAt
    @Column({field:'created_at'})
    createdAt:Date

    @UpdatedAt
    @Column({field:'updated_at'})
    updatedAt:Date
}