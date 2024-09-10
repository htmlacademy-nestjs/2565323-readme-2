import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserRegisterResponse,
} from '@project/shared-dtos';
import { TokensService } from '../tokens/tokens.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private tokensService: TokensService
  ) {}

  async register(dto: UserRegisterRequest): Promise<UserRegisterResponse> {
    return this.usersService.create(dto);
  }

  async login({ email }: UserLoginRequest): Promise<UserLoginResponse> {
    return this.tokensService.generateTokens(email);
  }
}
