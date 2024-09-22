import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Swagger } from './const.swagger';

export class ChangePasswordDto {
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

  @ApiProperty({
    description: Swagger.newPassword.description,
    example: Swagger.newPassword.example,
    maxLength: Swagger.newPassword.maxLength,
    minLength: Swagger.newPassword.minLength,
  })
  @IsString()
  @MaxLength(Swagger.newPassword.maxLength)
  @MinLength(Swagger.newPassword.minLength)
  newPassword: string;
}
