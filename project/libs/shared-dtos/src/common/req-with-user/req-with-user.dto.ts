import { IsObject } from 'class-validator';
import { UserRDO } from '../../accounts/user';

export class ReqWithUserDTO {
  @IsObject()
  user: UserRDO;
}
