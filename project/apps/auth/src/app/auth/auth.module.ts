import { Module } from '@nestjs/common';
import {
  ConfigAuthModule,
  JwtAccessStrategy,
} from '@project/shared-config/auth';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigAuthModule],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy],
})
export class AuthModule {}
