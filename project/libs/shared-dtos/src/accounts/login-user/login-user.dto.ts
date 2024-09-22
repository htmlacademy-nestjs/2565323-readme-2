import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Swagger } from './const.swagger';

export class LoginUserDto {
  @ApiProperty({
    description: Swagger.email.description,
    example: Swagger.email.example,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: Swagger.password.description,
    example: Swagger.password.example,
    maxLength: Swagger.password.maxLength,
    minLength: Swagger.password.minLength,
  })
  @IsString()
  @MaxLength(Swagger.password.maxLength)
  @MinLength(Swagger.password.minLength)
  password: string;
}
