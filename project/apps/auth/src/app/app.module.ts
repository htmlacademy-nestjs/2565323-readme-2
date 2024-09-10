import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'env/apps/auth/.env',
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
