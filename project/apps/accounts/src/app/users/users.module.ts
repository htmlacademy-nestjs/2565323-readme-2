import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserModel, UserSchema } from './models/user.model';
import { UsersMongoRepository } from './repositories/users.mongo-repository';
import { NotifyModule } from '../notify/notify.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    NotifyModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersMongoRepository],
  exports: [UsersService],
})
export class UsersModule {}
