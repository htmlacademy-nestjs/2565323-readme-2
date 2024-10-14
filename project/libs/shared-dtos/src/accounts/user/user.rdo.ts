import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class UserRdo {
  @ApiProperty(SWAGGER.ID)
  id: string;

  @ApiProperty(SWAGGER.EMAIL)
  email: string;

  @ApiProperty(SWAGGER.FULL_NAME)
  fullName: string;

  @ApiProperty(SWAGGER.AVATAR_SRC)
  avatarSrc?: string;
}
