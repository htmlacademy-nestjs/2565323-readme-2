import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserRdo } from '@project/shared-dtos';
import { HttpService } from '@nestjs/axios';
import { ServicesUrl } from '@project/shared-core';

@Injectable()
export class UsersService {
  constructor(private readonly httpService: HttpService) {}

  async create(dto: CreateUserDto): Promise<UserRdo> {
    const { data } = await this.httpService.axiosRef.post<UserRdo>(
      ServicesUrl.Accounts,
      dto
    );

    return data;
  }
}
