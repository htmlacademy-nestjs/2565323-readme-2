import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { Subscriber } from '@project/shared-types';

import { EMAIL_ADD_SUBSCRIBER_SUBJECT } from './mail.const';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) {}

  public async sendNotifyNewSubscriber(subscriber: Subscriber) {
    const mailer = this.configService.get('mailer');
    await this.mailerService.sendMail({
      from: mailer.from,
      to: subscriber.email,
      subject: EMAIL_ADD_SUBSCRIBER_SUBJECT,
      template: './add-subscriber',
      context: {
        user: `${subscriber.firstName} ${subscriber.lastName}`,
        email: `${subscriber.email}`,
      },
    });
  }
}
