import { Injectable } from '@nestjs/common';
import {
  UserRegisterRequest,
  UserRegisterResponse,
} from '@project/shared-dtos';
import { HttpService } from '@nestjs/axios';
import { ServicesUrl } from '@project/shared-core';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async create(dto: UserRegisterRequest): Promise<UserRegisterResponse> {
    const { data } = await this.httpService.axiosRef.post<UserRegisterResponse>(
      ServicesUrl.Accounts,
      dto
    );

    return data;
  }
}
