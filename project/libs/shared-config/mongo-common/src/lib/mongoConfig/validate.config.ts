import * as Joi from 'joi';
import { MongoConfig } from './mongo.config.interface';

const validationSchema = Joi.object({
  host: Joi.string().hostname().required(),
  port: Joi.number().port().required(),
  databaseName: Joi.string().required(),
  authDatabase: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export function validateConfig(config: MongoConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`[Mongo Config Validation Error]: ${error.message}`);
  }
}
