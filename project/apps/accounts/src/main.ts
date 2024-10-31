import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { setupSwagger } from './setupSwagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const host = configService.get('app.host');
  const port = configService.get('app.port');
  const globalPrefix = configService.get<string>('app.globalPrefix');
  app.setGlobalPrefix(globalPrefix);

  setupSwagger(app);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
}

bootstrap();
