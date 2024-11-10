import { Module } from '@nestjs/common';
import { ConfigNotifyModule } from '@project/shared-config/notify';
import { getMongooseOptions } from '@project/shared-core';
import { MongooseModule } from '@nestjs/mongoose';

import { EmailSubscriberModule } from './email-subscriber/email-subscriber.module';

@Module({
  imports: [
    MongooseModule.forRootAsync(getMongooseOptions('notify.db')),
    ConfigNotifyModule,
    EmailSubscriberModule,
  ],
})
export class AppModule {}
