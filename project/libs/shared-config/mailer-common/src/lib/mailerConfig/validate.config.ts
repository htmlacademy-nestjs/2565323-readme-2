import * as Joi from 'joi';
import { MailerConfig } from './mailer.config.interface';

const validationSchema = Joi.object({
  host: Joi.string().valid().hostname().required(),
  port: Joi.number().port().required(),
  user: Joi.string().required(),
  password: Joi.string().required(),
  from: Joi.string().required(),
});

export function validateConfig(config: MailerConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`[Mailer Config Validation Error]: ${error.message}`);
  }
}
