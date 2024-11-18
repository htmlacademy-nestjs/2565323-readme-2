import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { CreateSubscriberDTO } from '@project/shared-dtos';
import { RabbitExchange, RabbitRouting } from '@project/shared-types';

@Injectable()
export class NotifyService {
  constructor(private readonly rabbitClient: AmqpConnection) {}

  public async registerSubscriber(dto: CreateSubscriberDTO) {
    return this.rabbitClient.publish(
      RabbitExchange.Notify,
      RabbitRouting.AddSubscriber,
      { ...dto }
    );
  }
}
