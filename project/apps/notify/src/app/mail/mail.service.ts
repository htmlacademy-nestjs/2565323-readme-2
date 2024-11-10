import { Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigType } from '@nestjs/config';
import { Subscriber } from '@project/shared-types';
import { notifyConfig } from '@project/shared-config/notify';

import { EMAIL_ADD_SUBSCRIBER_SUBJECT } from './mail.const';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  @Inject(notifyConfig.KEY)
  private readonly notifyConfig: ConfigType<typeof notifyConfig>;

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    await this.mailerService.sendMail({
      from: this.notifyConfig.mail.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.fullName}`,
        email: `${subscriber.email}`,
      },
    });
  }
}
