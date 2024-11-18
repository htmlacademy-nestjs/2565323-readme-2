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

export class CreateUserDTO {
  @ApiProperty({
    description: SWAGGER.EMAIL.DESCRIPTION,
    example: SWAGGER.EMAIL.EXAMPLE,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: SWAGGER.FIRST_NAME.DESCRIPTION,
    example: SWAGGER.FIRST_NAME.EXAMPLE,
    minLength: SWAGGER.FIRST_NAME.MIN_LENGTH,
    maxLength: SWAGGER.FIRST_NAME.MAX_LENGTH,
  })
  @IsString()
  @MinLength(SWAGGER.FIRST_NAME.MIN_LENGTH)
  @MaxLength(SWAGGER.FIRST_NAME.MAX_LENGTH)
  firstName: string;

  @ApiProperty({
    description: SWAGGER.LAST_NAME.DESCRIPTION,
    example: SWAGGER.LAST_NAME.EXAMPLE,
    minLength: SWAGGER.LAST_NAME.MIN_LENGTH,
    maxLength: SWAGGER.LAST_NAME.MAX_LENGTH,
  })
  @IsString()
  @MinLength(SWAGGER.LAST_NAME.MIN_LENGTH)
  @MaxLength(SWAGGER.LAST_NAME.MAX_LENGTH)
  lastName: string;

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
