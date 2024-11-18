import { Injectable } from '@nestjs/common';
import { LoginUserRDO, UserRDO } from '@project/shared-dtos';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async login(payload: UserRDO): Promise<LoginUserRDO> {
    return this.generateTokens(payload);
  }

  async generateTokens(payload: UserRDO) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync({ payload }),
      this.jwtService.signAsync(
        { ...payload, tokenId: crypto.randomUUID() },
        {
          secret: this.configService.get<string>('jwt.refreshTokenSecret'),
          expiresIn: this.configService.get<string>(
            'jwt.refreshTokenExpiresIn'
          ),
        }
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
