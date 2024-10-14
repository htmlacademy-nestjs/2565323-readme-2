import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './appConfig';
import { PrismaClientModule } from './prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig],
    }),
    PrismaClientModule,
  ],
})
export class ConfigPostModule {}
