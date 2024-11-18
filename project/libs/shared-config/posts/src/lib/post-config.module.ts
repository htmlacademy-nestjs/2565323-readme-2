import { Module } from '@nestjs/common';
import { PrismaClientModule } from './prisma';

@Module({
  imports: [
    PrismaClientModule,
  ],
})
export class PostConfigModule {}
