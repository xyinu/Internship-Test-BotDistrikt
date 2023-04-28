import { IsString, IsNotEmpty, IsOptional } from "class-validator";


export class AuthorDto{
    @IsOptional()
    @IsString()
    name?:string;

    @IsOptional()
    @IsString()
    biography?:string;
}
