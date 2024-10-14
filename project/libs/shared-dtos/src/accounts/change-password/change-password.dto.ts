import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class ChangePasswordDto {
  @ApiProperty(SWAGGER.PASSWORD)
  @IsString()
  @MaxLength(SWAGGER.PASSWORD.maxLength)
  @MinLength(SWAGGER.PASSWORD.minLength)
  password: string;

  @ApiProperty(SWAGGER.NEW_PASSWORD)
  @IsString()
  @MaxLength(SWAGGER.NEW_PASSWORD.maxLength)
  @MinLength(SWAGGER.NEW_PASSWORD.minLength)
  newPassword: string;
}
