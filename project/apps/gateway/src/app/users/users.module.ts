import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [UsersService, PostsService],
  exports: [UsersService, PostsService],
})
export class UsersModule {}
