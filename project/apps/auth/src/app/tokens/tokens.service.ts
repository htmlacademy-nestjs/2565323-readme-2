import { Injectable } from '@nestjs/common';

@Injectable()
export class TokensService {
  /** TODO здесь пока заглушка */
  async generateTokens(email: string) {
    return {
      accessToken: 'SOME_TOKEN',
      refreshToken: 'SOME_REFRESH_TOKEN',
    };
  }
}
