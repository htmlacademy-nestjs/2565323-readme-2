import { registerAs } from '@nestjs/config';
import { AppConfig } from './app.config.interface';
import { validateConfig } from './validate.config';

function getConfig(): AppConfig {
  const config: AppConfig = {
    host: process.env['APP_HOST'] ?? '',
    port: parseInt(process.env['APP_PORT'] ?? '', 10),
    globalPrefix: process.env['APP_PREFIX'] ?? '',
  };

  validateConfig(config);

  return config;
}

export const appConfig = registerAs('app', getConfig);
