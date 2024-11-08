import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class UserRdo {
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
    description: SWAGGER.FULL_NAME.DESCRIPTION,
    example: SWAGGER.FULL_NAME.EXAMPLE,
    minLength: SWAGGER.FULL_NAME.MIN_LENGTH,
    maxLength: SWAGGER.FULL_NAME.MAX_LENGTH,
  })
  fullName: string;

  @ApiProperty({
    description: SWAGGER.AVATAR_SRC.DESCRIPTION,
    example: SWAGGER.AVATAR_SRC.EXAMPLE,
  })
  avatarSrc?: string;
}
