import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { LoginUserDTO, UserRDO } from '@project/shared-dtos';

import { USERS_BASE_URL } from './users.const';

@Injectable()
export class UsersService {
  constructor(
    private readonly httpService: HttpService
  ) {}

  async verify({ email, password }: LoginUserDTO): Promise<UserRDO> {
    const url = `${USERS_BASE_URL}/users/verify`;

    const { data } = await this.httpService.axiosRef.post(url, {
      email,
      password,
    });

    return data;
  }

  async getInfo(userId: string, token: string): Promise<UserRDO> {
    const url = `${USERS_BASE_URL}/users/${userId}`;

    const { data } = await this.httpService.axiosRef.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return data;
  }
}
