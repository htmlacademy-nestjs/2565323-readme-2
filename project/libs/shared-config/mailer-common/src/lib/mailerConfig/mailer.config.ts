import { registerAs } from '@nestjs/config';

import { MailerConfig } from './mailer.config.interface';
import { validateConfig } from './validate.config';

function getConfig(): MailerConfig {
  const config: MailerConfig = {
    host: process.env['MAIL_SMTP_HOST'] ?? '',
    port: parseInt(process.env['MAIL_SMTP_PORT'] ?? '', 10),
    user: process.env['MAIL_USER_NAME'] ?? '',
    password: process.env['MAIL_USER_PASSWORD'] ?? '',
    from: process.env['MAIL_FROM'] ?? '',
  };

  validateConfig(config);

  return config;
}

export const mailerConfig = registerAs('mailer', getConfig);
