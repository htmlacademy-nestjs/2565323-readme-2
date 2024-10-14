import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './appConfig';
import { mongoConfig } from './mongoConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig],
    }),
  ],
})
export class ConfigAccountModule {}
