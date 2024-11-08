import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { appConfig } from './appConfig';
import { mongoConfig } from './mongoConfig';
import rabbitConfig from './rabbitConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig, rabbitConfig],
    }),
  ],
})
export class ConfigAccountModule {}
