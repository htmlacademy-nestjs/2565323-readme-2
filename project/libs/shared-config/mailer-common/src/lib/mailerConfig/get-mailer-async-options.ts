import { resolve } from 'node:path';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { ConfigService } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export function getMailerAsyncOptions(): MailerAsyncOptions {
  return {
    useFactory: async (configService: ConfigService) => {
      return {
        transport: {
          host: configService.get<string>('mailer.host'),
          port: configService.get<number>('mailer.port'),
          secure: false,
          auth: {
            user: configService.get<string>('mailer.user'),
            pass: configService.get<string>('mailer.password'),
          },
        },
        defaults: {
          from: configService.get<string>('mailer.from'),
        },
        template: {
          dir: resolve(__dirname, 'assets'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      };
    },
    inject: [ConfigService],
  };
}
