import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { notifyConfig } from './notifyConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [notifyConfig],
    }),
  ],
})
export class ConfigNotifyModule {}
