import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { CreateSubscriberDTO } from '@project/shared-dtos';
import {
  RabbitExchange,
  RabbitQueue,
  RabbitRouting,
} from '@project/shared-types';

import { EmailSubscriberService } from './email-subscriber.service';
import { MailService } from '../mail/mail.service';

@Controller()
export class EmailSubscriberController {
  constructor(
    private readonly subscriberService: EmailSubscriberService,
    private readonly mailService: MailService
  ) {}

  @RabbitSubscribe({
    exchange: RabbitExchange.Notify,
    routingKey: RabbitRouting.AddSubscriber,
    queue: RabbitQueue.NotifyIncome,
  })
  public async create(subscriber: CreateSubscriberDTO) {
    await this.subscriberService.addSubscriber(subscriber);
    await this.mailService.sendNotifyNewSubscriber(subscriber);
  }
}
