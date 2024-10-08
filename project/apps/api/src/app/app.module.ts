import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env/apps/api/.env',
    }),
  ],
})
export class AppModule {}
