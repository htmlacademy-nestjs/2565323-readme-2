import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { rabbitConfig } from './rabbitmqConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [rabbitConfig],
    }),
  ],
})
export class RabbitmqConfigModule {}
