import { plainToClass } from 'class-transformer';
import { registerAs, ConfigType } from '@nestjs/config';
import { AppConfiguration } from './app.env';

export interface AppConfig {
  host: string;
  port: number;
  globalPrefix: string;
}

async function getAppConfig(): Promise<AppConfiguration> {
  const config = plainToClass(AppConfiguration, {
    host: process.env.ACCOUNTS_HOST,
    port: parseInt(process.env.ACCOUNTS_PORT, 10),
    globalPrefix: process.env.ACCOUNTS_GLOBAL_PREFIX,
  });

  await config.validate();

  return config;
}

export const appConfig = registerAs(
  'app',
  async (): Promise<ConfigType<typeof getAppConfig>> => getAppConfig()
);
