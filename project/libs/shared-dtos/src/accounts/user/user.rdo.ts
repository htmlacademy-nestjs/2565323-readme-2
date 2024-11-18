import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class UserRDO {
  @ApiProperty({
    description: SWAGGER.ID.DESCRIPTION,
    example: SWAGGER.ID.EXAMPLE,
  })
  id: string;

  @ApiProperty({
    description: SWAGGER.EMAIL.DESCRIPTION,
    example: SWAGGER.EMAIL.EXAMPLE,
  })
  email: string;

  @ApiProperty({
    description: SWAGGER.FIRST_NAME.DESCRIPTION,
    example: SWAGGER.FIRST_NAME.EXAMPLE,
    minLength: SWAGGER.FIRST_NAME.MIN_LENGTH,
    maxLength: SWAGGER.FIRST_NAME.MAX_LENGTH,
  })
  firstName: string;

  @ApiProperty({
    description: SWAGGER.LAST_NAME.DESCRIPTION,
    example: SWAGGER.LAST_NAME.EXAMPLE,
    minLength: SWAGGER.LAST_NAME.MIN_LENGTH,
    maxLength: SWAGGER.LAST_NAME.MAX_LENGTH,
  })
  lastName: string;

  @ApiProperty({
    description: SWAGGER.AVATAR_SRC.DESCRIPTION,
    example: SWAGGER.AVATAR_SRC.EXAMPLE,
  })
  avatarSrc?: string;

  @ApiProperty({
    description: SWAGGER.CREATED_AT.DESCRIPTION,
    example: SWAGGER.CREATED_AT.EXAMPLE,
  })
  createdAt?: Date;
}
