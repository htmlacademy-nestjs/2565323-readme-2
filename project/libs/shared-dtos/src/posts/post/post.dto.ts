import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class PostDTO {
  @ApiProperty({
    description: SWAGGER.TITLE.DESCRIPTION,
    example: SWAGGER.TITLE.EXAMPLE,
    minLength: SWAGGER.TITLE.MIN_LENGTH,
    maxLength: SWAGGER.TITLE.MAX_LENGTH,
  })
  @IsString()
  @MaxLength(SWAGGER.TITLE.MAX_LENGTH)
  @MinLength(SWAGGER.TITLE.MIN_LENGTH)
  title: string;

  @ApiProperty({
    description: SWAGGER.CONTENT.DESCRIPTION,
    example: SWAGGER.CONTENT.EXAMPLE,
    minLength: SWAGGER.CONTENT.MIN_LENGTH,
    maxLength: SWAGGER.CONTENT.MAX_LENGTH,
  })
  @IsString()
  @MaxLength(SWAGGER.CONTENT.MAX_LENGTH)
  @MinLength(SWAGGER.CONTENT.MIN_LENGTH)
  content: string;
}
