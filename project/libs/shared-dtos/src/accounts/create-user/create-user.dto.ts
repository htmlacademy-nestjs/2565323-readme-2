import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Swagger } from './const.swagger';

export class CreateUserDto {
  @ApiProperty({
    description: Swagger.email.description,
    example: Swagger.email.example,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: Swagger.fullName.description,
    example: Swagger.fullName.example,
    maxLength: Swagger.fullName.maxLength,
    minLength: Swagger.fullName.minLength,
  })
  @IsString()
  @MaxLength(Swagger.fullName.maxLength)
  @MinLength(Swagger.fullName.minLength)
  fullName: string;

  @ApiProperty({
    description: Swagger.password.description,
    example: Swagger.password.example,
    minLength: Swagger.password.minLength,
    maxLength: Swagger.password.maxLength,
  })
  @IsString()
  @MaxLength(Swagger.password.maxLength)
  @MinLength(Swagger.password.minLength)
  password: string;

  @ApiPropertyOptional({
    description: Swagger.avatarSrc.description,
    example: Swagger.avatarSrc.example,
  })
  @IsString()
  @IsOptional()
  avatarSrc?: string;
}
