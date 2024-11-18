import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AuthCommonConfigModule,
  JwtAccessStrategy,
} from '@project/shared-config/auth-common';
import { AppConfigModule } from '@project/shared-config/app-common';
import {
  getMongooseOptions,
  MongoConfigModule,
} from '@project/shared-config/mongo-common';
import { RabbitmqConfigModule } from '@project/shared-config/rabbitmq-common';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    MongoConfigModule,
    RabbitmqConfigModule,
    UsersModule,
    AuthCommonConfigModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [JwtAccessStrategy],
})
export class AppModule {}
