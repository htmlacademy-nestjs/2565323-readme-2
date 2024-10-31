import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './appConfig';
import { mongoConfig } from './mongoConfig';
import { jwtConfig } from './jwtConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig, jwtConfig],
    }),
  ],
})
export class ConfigAccountModule {}
