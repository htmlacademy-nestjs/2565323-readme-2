import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SWAGGER } from './const.swagger';

export class CreateUserDto {
  @ApiProperty(SWAGGER.EMAIL)
  @IsEmail()
  email: string;

  @ApiProperty(SWAGGER.FULL_NAME)
  @IsString()
  @MaxLength(SWAGGER.FULL_NAME.maxLength)
  @MinLength(SWAGGER.FULL_NAME.minLength)
  fullName: string;

  @ApiProperty(SWAGGER.PASSWORD)
  @IsString()
  @MaxLength(SWAGGER.PASSWORD.maxLength)
  @MinLength(SWAGGER.PASSWORD.minLength)
  password: string;

  @ApiPropertyOptional(SWAGGER.AVATAR_SRC)
  @IsUrl()
  @IsOptional()
  avatarSrc?: string;
}
