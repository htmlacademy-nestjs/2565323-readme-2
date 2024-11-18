import { Module } from '@nestjs/common';
import { AuthGatewayConfigModule } from '@project/shared-config/auth-gateway';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessStrategy } from './strategies/jwt-access.strategy';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  /* TODO is it ok to import UsersModule here? */
  imports: [AuthGatewayConfigModule, UsersModule],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy, LocalStrategy],
})
export class AuthModule {}
