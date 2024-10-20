import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class PostDto {
  @ApiProperty(SWAGGER.TITLE)
  @IsString()
  @MaxLength(SWAGGER.TITLE.maxLength)
  @MinLength(SWAGGER.TITLE.minLength)
  title: string;

  @ApiProperty(SWAGGER.CONTENT)
  @IsString()
  @MaxLength(SWAGGER.CONTENT.maxLength)
  @MinLength(SWAGGER.CONTENT.minLength)
  content: string;
}
