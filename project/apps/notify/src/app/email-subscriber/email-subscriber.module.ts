import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { getRabbitMQOptions } from '@project/shared-config/rabbitmq-common';

import {
  EmailSubscriberModel,
  EmailSubscriberSchema,
} from './models/email-subscriber.model';
import { EmailSubscriberController } from './email-subscriber.controller';
import { EmailSubscriberService } from './email-subscriber.service';
import { EmailSubscriberMongoRepository } from './repositories/email-subscriber.mongo-repository';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmailSubscriberModel.name, schema: EmailSubscriberSchema },
    ]),
    RabbitMQModule.forRootAsync(
      RabbitMQModule,
      getRabbitMQOptions()
    ),
    MailModule,
  ],
  controllers: [EmailSubscriberController],
  providers: [
    EmailSubscriberService,
    EmailSubscriberMongoRepository,
  ],
})
export class EmailSubscriberModule {}
