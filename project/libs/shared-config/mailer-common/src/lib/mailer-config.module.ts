import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { mailerConfig } from './mailerConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [mailerConfig],
    }),
  ],
})
export class MailerConfigModule {}
