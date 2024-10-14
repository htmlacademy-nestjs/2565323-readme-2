import { plainToClass } from 'class-transformer';
import { registerAs, ConfigType } from '@nestjs/config';

import { MongoConfiguration } from './mongo.env';

export interface MongoConfig {
  host: string;
  name: string;
  port: number;
  user: string;
  password: string;
  authDatabase: string;
}

async function getDbConfig(): Promise<MongoConfiguration> {
  const config = plainToClass(MongoConfiguration, {
    host: process.env.MONGO_HOST,
    name: process.env.MONGO_DB,
    port: parseInt(process.env.MONGO_PORT, 10),
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    authBase: process.env.MONGO_AUTH_BASE,
  });

  await config.validate();

  return config;
}

export const mongoConfig = registerAs(
  'db',
  async (): Promise<ConfigType<typeof getDbConfig>> => getDbConfig()
);
