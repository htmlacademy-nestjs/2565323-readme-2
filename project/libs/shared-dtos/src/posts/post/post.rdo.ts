import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class PostRdo {
  @ApiProperty(SWAGGER.ID)
  id: string;

  @ApiProperty(SWAGGER.TITLE)
  title: string;

  @ApiProperty(SWAGGER.CONTENT)
  content: string;

  @ApiProperty(SWAGGER.CREATED_AT)
  createdAt: Date;

  @ApiProperty(SWAGGER.USER_ID)
  userId: string;
}
