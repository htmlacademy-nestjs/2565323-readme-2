import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule } from '@project/shared-config/app-common';
import { MailerConfigModule } from '@project/shared-config/mailer-common';
import {
  getMongooseOptions,
  MongoConfigModule,
} from '@project/shared-config/mongo-common';
import { RabbitmqConfigModule } from '@project/shared-config/rabbitmq-common';

import { EmailSubscriberModule } from './email-subscriber/email-subscriber.module';

@Module({
  imports: [
    AppConfigModule,
    RabbitmqConfigModule,
    MailerConfigModule,
    MongoConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
    EmailSubscriberModule,
  ],
})
export class AppModule {}
