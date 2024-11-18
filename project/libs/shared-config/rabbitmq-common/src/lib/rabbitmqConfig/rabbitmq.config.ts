import { registerAs } from '@nestjs/config';
import { RabbitmqConfig } from './rabbitmq.config.interface';
import { validateConfig } from './validate.config';

function getConfig(): RabbitmqConfig {
  const config: RabbitmqConfig = {
    host: process.env['RABBIT_HOST'] ?? '',
    port: parseInt(process.env['RABBIT_PORT'] ?? '', 10),
    user: process.env['RABBIT_USER'] ?? '',
    password: process.env['RABBIT_PASSWORD'] ?? '',
  };

  validateConfig(config);

  return config;
}

export const rabbitConfig = registerAs('rabbitmq', getConfig);
