import { plainToClass } from 'class-transformer';
import { registerAs, ConfigType } from '@nestjs/config';
import { AppConfiguration } from './app.env';

export interface AppConfig {
  globalPrefix: string;
  port: number;
}

async function getAppConfig(): Promise<AppConfiguration> {
  const config = plainToClass(AppConfiguration, {
    globalPrefix: process.env.POSTS_GLOBAL_PREFIX,
    port: parseInt(process.env.POSTS_PORT, 10),
  });

  await config.validate();

  return config;
}

export const appConfig = registerAs(
  'app',
  async (): Promise<ConfigType<typeof getAppConfig>> => getAppConfig()
);
