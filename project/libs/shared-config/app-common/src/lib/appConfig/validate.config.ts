import * as Joi from 'joi';
import { AppConfig } from './app.config.interface';

const validationSchema = Joi.object({
  host: Joi.string().hostname().required(),
  port: Joi.number().port().required(),
  globalPrefix: Joi.string().required(),
});

export function validateConfig(config: AppConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`[App Config Validation Error]: ${error.message}`);
  }
}
