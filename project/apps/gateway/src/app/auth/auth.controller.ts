import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUserRDO, ReqWithUserDTO } from '@project/shared-dtos';

import { AuthService } from './auth.service';
import { SWAGGER } from './auth.swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(SWAGGER.LOGIN.OPERATION)
  @ApiBody(SWAGGER.LOGIN.BODY)
  @ApiResponse(SWAGGER.LOGIN.RESPONSE_STATUS_200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() { user }: ReqWithUserDTO): Promise<LoginUserRDO> {
    const { accessToken, refreshToken } = await this.authService.login(user);
    return { accessToken, refreshToken };
  }
}
