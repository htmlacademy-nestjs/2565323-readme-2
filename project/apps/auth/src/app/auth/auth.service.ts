import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  LoginUserDto,
  LoginUserRdo,
  CreateUserDto,
  UserRdo,
} from '@project/shared-dtos';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(dto: CreateUserDto): Promise<UserRdo> {
    return this.usersService.create(dto);
  }

  async login({ email }: LoginUserDto): Promise<LoginUserRdo> {
    return this.generateTokens(email);
  }

  async generateTokens(email: string) {
    return {
      accessToken: 'SOME_TOKEN',
      refreshToken: 'SOME_REFRESH_TOKEN',
    };
  }
}
