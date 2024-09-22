import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ConfigAccountModule,
  getMongooseOptions,
} from '@project/shared-config/accounts';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigAccountModule,
    UsersModule,
    MongooseModule.forRootAsync(getMongooseOptions()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
