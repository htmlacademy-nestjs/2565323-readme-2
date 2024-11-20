import { bootstrap } from '@project/shared-core';

import { AppModule } from './app/app.module';
import { DocumentBuilder } from '@nestjs/swagger';

bootstrap({
  appModule: AppModule,
  swaggerConfig: new DocumentBuilder()
    .setTitle('API Gateway')
    .setVersion('1.0')
    .build()
});
