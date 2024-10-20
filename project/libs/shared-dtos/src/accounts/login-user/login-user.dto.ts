import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class LoginUserDto {
  @ApiProperty(SWAGGER.EMAIL)
  @IsEmail()
  email: string;

  @ApiProperty(SWAGGER.PASSWORD)
  @IsString()
  @MaxLength(SWAGGER.PASSWORD.maxLength)
  @MinLength(SWAGGER.PASSWORD.minLength)
  password: string;
}
