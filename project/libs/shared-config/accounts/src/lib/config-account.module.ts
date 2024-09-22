import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './appConfig';
import { mongoConfig } from './mongoConfig';

const ENV_USERS_FILE_PATH = 'apps/accounts/.env.dev';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, mongoConfig],
      envFilePath: ENV_USERS_FILE_PATH
    }),
  ]
})
export class ConfigAccountModule {}
