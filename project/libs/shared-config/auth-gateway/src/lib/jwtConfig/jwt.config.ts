import { registerAs } from '@nestjs/config';

import { JWTConfig } from './jwt.config.interface';
import { validateConfig } from './validate.config';

function getConfig(): JWTConfig {
  const config: JWTConfig = {
    accessTokenSecret: process.env['JWT_ACCESS_TOKEN_SECRET'] ?? '',
    accessTokenExpiresIn: process.env['JWT_ACCESS_TOKEN_EXPIRES_IN'] ?? '',
    refreshTokenSecret: process.env['JWT_REFRESH_TOKEN_SECRET'] ?? '',
    refreshTokenExpiresIn: process.env['JWT_REFRESH_TOKEN_EXPIRES_IN'] ?? '',
  };

  validateConfig(config);

  return config;
}

export const jwtConfig = registerAs('jwt', getConfig);
