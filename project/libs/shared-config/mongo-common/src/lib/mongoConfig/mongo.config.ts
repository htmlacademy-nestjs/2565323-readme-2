import { registerAs } from '@nestjs/config';
import { MongoConfig } from './mongo.config.interface';
import { validateConfig } from './validate.config';

function getConfig(): MongoConfig {
  const config: MongoConfig = {
    host: process.env['MONGO_HOST'] ?? '',
    port: parseInt(process.env['MONGO_PORT'] ?? '', 10),
    databaseName: process.env['MONGO_DB'] ?? '',
    username: process.env['MONGO_USER'] ?? '',
    password: process.env['MONGO_PASSWORD'] ?? '',
    authDatabase: process.env['MONGO_AUTH_BASE'] ?? '',
  };

  validateConfig(config);

  return config;
}

export const mongoConfig = registerAs('mongodb', getConfig);
