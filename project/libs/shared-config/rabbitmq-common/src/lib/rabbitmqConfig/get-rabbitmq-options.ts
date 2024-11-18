import { ConfigService } from '@nestjs/config';
import { getRabbitMQConnectionString } from '@project/shared-utils';
import { RabbitExchange } from '@project/shared-types';

export function getRabbitMQOptions() {
  return {
    useFactory: async (config: ConfigService) => ({
      exchanges: [
        {
          name: RabbitExchange.Notify,
          type: 'direct',
        },
      ],
      uri: getRabbitMQConnectionString({
        host: config.get<string>('rabbitmq.host'),
        password: config.get<string>('rabbitmq.password'),
        user: config.get<string>('rabbitmq.user'),
        port: config.get<string>('rabbitmq.port'),
      }),
      connectionInitOptions: { wait: true },
      enableControllerDiscovery: true,
    }),
    inject: [ConfigService],
  };
}
