import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { jwtConfig, getJwtOptions } from './jwtConfig';
import { JwtAccessStrategy } from './jwtConfig/strategies/jwt-access.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [jwtConfig]
    }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  providers: [JwtModule, JwtAccessStrategy],
  exports: [JwtModule, JwtAccessStrategy],
})
export class AuthCommonConfigModule {}
