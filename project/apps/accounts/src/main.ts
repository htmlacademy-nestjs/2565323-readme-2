import { AppModule } from './app/app.module';
import { bootstrap } from '@project/shared-core';
import { DocumentBuilder } from '@nestjs/swagger';

bootstrap({
  appModule: AppModule,
  swaggerConfig: new DocumentBuilder()
    .setTitle('Accounts microservice')
    .setDescription('Accounts API')
    .setVersion('1.0')
    .build(),
});
