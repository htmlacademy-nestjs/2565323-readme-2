import { Injectable } from '@nestjs/common';
import { LoginUserDto, LoginUserRdo } from '@project/shared-dtos';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login({ email }: LoginUserDto): Promise<LoginUserRdo> {
    return this.generateTokens(email);
  }

  /* TODO need user from accounts service */
  async generateTokens(email: string) {
    return {
      accessToken: await this.jwtService.signAsync({ email }),
      refreshToken: 'SOME_REFRESH_TOKEN',
    };
  }
}
