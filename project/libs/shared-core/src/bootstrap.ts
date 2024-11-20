import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

type BootstrapParams = {
  appModule: Parameters<typeof NestFactory.create>[0];
  swaggerConfig?: Parameters<typeof SwaggerModule.createDocument>[1];
};

export const bootstrap = async ({
  appModule,
  swaggerConfig,
}: BootstrapParams) => {
  const app = await NestFactory.create(appModule);

  const configService = app.get(ConfigService);
  const host = configService.get<string>('app.host');
  const port = configService.get<number>('app.port');
  const globalPrefix = configService.get<string>('app.globalPrefix');
  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  if (swaggerConfig) {
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
};
