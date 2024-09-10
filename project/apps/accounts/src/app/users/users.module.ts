import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMemoryRepository } from './repositories/users.memory-repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersMemoryRepository],
  exports: [UsersService],
})
export class UsersModule {}
