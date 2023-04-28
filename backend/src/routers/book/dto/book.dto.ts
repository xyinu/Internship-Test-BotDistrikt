import { IsString, IsNotEmpty, IsOptional, IsInt } from "class-validator";

export class BookDto{
    @IsOptional()
    @IsString()
    title?:string;

    @IsOptional()
    @IsString()
    publisher?:string;

    @IsOptional()
    @IsInt()
    year?:number;

    @IsOptional()
    @IsString()
    author?:string;
}
