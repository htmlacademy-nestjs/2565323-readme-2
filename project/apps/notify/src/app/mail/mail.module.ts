import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { getMailerAsyncOptions } from '@project/shared-core';

import { MailService } from './mail.service';

@Module({
  imports: [MailerModule.forRootAsync(getMailerAsyncOptions('notify.mail'))],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
