import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConfigAccountModule,
  getMongooseOptions,
} from '@project/shared-config/accounts';
import {
  ConfigAuthModule,
  JwtAccessStrategy,
} from '@project/shared-config/auth';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigAccountModule,
    UsersModule,
    ConfigAuthModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [JwtAccessStrategy],
})
export class AppModule {}
