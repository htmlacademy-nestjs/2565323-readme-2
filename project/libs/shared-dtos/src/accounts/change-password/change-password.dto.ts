import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class ChangePasswordDto {
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

  @ApiProperty({
    description: SWAGGER.NEW_PASSWORD.DESCRIPTION,
    example: SWAGGER.NEW_PASSWORD.EXAMPLE,
    minLength: SWAGGER.NEW_PASSWORD.MIN_LENGTH,
    maxLength: SWAGGER.NEW_PASSWORD.MAX_LENGTH,
  })
  @IsString()
  @MinLength(SWAGGER.NEW_PASSWORD.MIN_LENGTH)
  @MaxLength(SWAGGER.NEW_PASSWORD.MAX_LENGTH)
  newPassword: string;
}
