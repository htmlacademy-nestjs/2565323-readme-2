import { ApiProperty } from '@nestjs/swagger';

import { SWAGGER } from './swagger.const';
import { UserRDO } from '../../accounts/user/user.rdo';

export class UserInfoRDO {
  @ApiProperty({
    description: SWAGGER.USER.DESCRIPTION,
    example: SWAGGER.USER.EXAMPLE,
    type: UserRDO,
  })
  user: UserRDO;

  @ApiProperty({
    description: SWAGGER.POST_COUNT.DESCRIPTION,
    example: SWAGGER.POST_COUNT.EXAMPLE,
  })
  postCount: number;
}
