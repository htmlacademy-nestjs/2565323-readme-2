import { plainToClass } from 'class-transformer';
import { registerAs, ConfigType } from '@nestjs/config';
import { AppConfiguration } from './app.env';
import { DEFAULT_PORT } from './app.const';

export interface AppConfig {
  globalPrefix: string;
  port: number;
}

async function getAppConfig(): Promise<AppConfiguration> {
  const config = plainToClass(AppConfiguration, {
    globalPrefix: process.env.ACCOUNTS_GLOBAL_PREFIX,
    port: process.env.ACCOUNTS_PORT
      ? parseInt(process.env.ACCOUNTS_PORT, 10)
      : DEFAULT_PORT,
  });

  await config.validate();

  return config;
}

export default registerAs(
  'app',
  async (): Promise<ConfigType<typeof getAppConfig>> => {
    return getAppConfig();
  }
);
