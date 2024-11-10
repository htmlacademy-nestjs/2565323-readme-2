import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class PostRdo {
  @ApiProperty({
    description: SWAGGER.ID.description,
    example: SWAGGER.ID.example,
  })
  id: string;

  @ApiProperty({
    description: SWAGGER.TITLE.DESCRIPTION,
    example: SWAGGER.TITLE.EXAMPLE,
    minLength: SWAGGER.TITLE.MIN_LENGTH,
    maxLength: SWAGGER.TITLE.MAX_LENGTH,
  })
  title: string;

  @ApiProperty({
    description: SWAGGER.CONTENT.DESCRIPTION,
    example: SWAGGER.CONTENT.EXAMPLE,
    minLength: SWAGGER.CONTENT.MIN_LENGTH,
    maxLength: SWAGGER.CONTENT.MAX_LENGTH,
  })
  content: string;

  @ApiProperty({
    description: SWAGGER.CREATED_AT.description,
    example: SWAGGER.CREATED_AT.example,
  })
  createdAt: Date;

  @ApiProperty({
    description: SWAGGER.USER_ID.description,
    example: SWAGGER.USER_ID.example,
  })
  userId: string;
}
