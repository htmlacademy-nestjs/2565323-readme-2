import { ApiProperty } from '@nestjs/swagger';
import { Swagger } from './const.swagger';

export class LoginUserRdo {
  @ApiProperty({
    description: Swagger.accessToken.description,
    example: Swagger.accessToken.example,
  })
  accessToken: string;

  @ApiProperty({
    description: Swagger.refreshToken.description,
    example: Swagger.refreshToken.example,
  })
  refreshToken: string;
}
