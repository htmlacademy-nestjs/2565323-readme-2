import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { SWAGGER } from './swagger.const';

export class CreateUserDto {
  @ApiProperty({
    description: SWAGGER.EMAIL.DESCRIPTION,
    example: SWAGGER.EMAIL.EXAMPLE,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: SWAGGER.FULL_NAME.DESCRIPTION,
    example: SWAGGER.FULL_NAME.EXAMPLE,
    minLength: SWAGGER.FULL_NAME.MIN_LENGTH,
    maxLength: SWAGGER.FULL_NAME.MAX_LENGTH,
  })
  @IsString()
  @MinLength(SWAGGER.FULL_NAME.MIN_LENGTH)
  @MaxLength(SWAGGER.FULL_NAME.MAX_LENGTH)
  fullName: string;

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

  @ApiPropertyOptional({
    description: SWAGGER.AVATAR_SRC.DESCRIPTION,
    example: SWAGGER.AVATAR_SRC.EXAMPLE,
  })
  @IsUrl()
  @IsOptional()
  avatarSrc?: string;
}
