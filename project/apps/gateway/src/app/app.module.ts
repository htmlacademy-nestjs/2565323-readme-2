import { Module } from '@nestjs/common';
import { AppConfigModule } from '@project/shared-config/app-common';

import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
