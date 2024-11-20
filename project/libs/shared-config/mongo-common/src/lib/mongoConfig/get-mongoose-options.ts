import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from '@project/shared-utils';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  return {
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          host: config.get<string>('mongodb.host'),
          port: config.get<number>('mongodb.port'),
          databaseName: config.get<string>('mongodb.databaseName'),
          authDatabase: config.get<string>('mongodb.authDatabase'),
          username: config.get<string>('mongodb.username'),
          password: config.get<string>('mongodb.password'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
