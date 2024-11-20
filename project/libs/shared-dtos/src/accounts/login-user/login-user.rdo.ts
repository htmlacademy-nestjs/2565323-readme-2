import { ApiProperty } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class LoginUserRDO {
  @ApiProperty({
    description: SWAGGER.ACCESS_TOKEN.DESCRIPTION,
    example: SWAGGER.ACCESS_TOKEN.EXAMPLE,
  })
  accessToken: string;

  @ApiProperty({
    description: SWAGGER.REFRESH_TOKEN.DESCRIPTION,
    example: SWAGGER.REFRESH_TOKEN.EXAMPLE,
  })
  refreshToken: string;
}
