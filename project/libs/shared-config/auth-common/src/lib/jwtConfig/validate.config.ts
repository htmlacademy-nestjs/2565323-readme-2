import * as Joi from 'joi';
import { JWTConfig } from './jwt.config.interface';

const validationSchema = Joi.object({
  accessTokenSecret: Joi.string().required(),
  accessTokenExpiresIn: Joi.string().required(),
});

export function validateConfig(config: JWTConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`[JWT Config Validation Error]: ${error.message}`);
  }
}
