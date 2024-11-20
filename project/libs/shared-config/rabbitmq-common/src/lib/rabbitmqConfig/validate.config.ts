import * as Joi from 'joi';
import { RabbitmqConfig } from './rabbitmq.config.interface';

const validationSchema = Joi.object({
  host: Joi.string().hostname().required(),
  password: Joi.string().required(),
  port: Joi.number().port().required(),
  user: Joi.string().required(),
});

export function validateConfig(config: RabbitmqConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: false });
  if (error) {
    throw new Error(`[RabbitMQ Config Validation Error]: ${error.message}`);
  }
}
