import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class PostRDO {
  @ApiProperty({
    description: SWAGGER.ID.DESCRIPTION,
    example: SWAGGER.ID.EXAMPLE,
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
    description: SWAGGER.CREATED_AT.DESCRIPTION,
    example: SWAGGER.CREATED_AT.EXAMPLE,
  })
  createdAt: Date;

  @ApiProperty({
    description: SWAGGER.USER_ID.DESCRIPTION,
    example: SWAGGER.USER_ID.EXAMPLE,
  })
  userId: string;
}
