import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class LoginUserRdo {
  @ApiProperty(SWAGGER.ACCESS_TOKEN)
  accessToken: string;

  @ApiProperty(SWAGGER.REFRESH_TOKEN)
  refreshToken: string;
}
