import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class LoginUserDto {
  @ApiProperty({
    description: SWAGGER.EMAIL.DESCRIPTION,
    example: SWAGGER.EMAIL.EXAMPLE,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: SWAGGER.PASSWORD.DESCRIPTION,
    example: SWAGGER.PASSWORD.EXAMPLE,
    minLength: SWAGGER.PASSWORD.MIN_LENGTH,
    maxLength: SWAGGER.PASSWORD.MAX_LENGTH,
  })
  @IsString()
  @MinLength(SWAGGER.PASSWORD.MIN_LENGTH)
  @MaxLength(SWAGGER.PASSWORD.MAX_LENGTH)
  password: string;
}
