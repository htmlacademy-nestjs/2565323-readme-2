import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto, LoginUserRdo } from '@project/shared-dtos';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SWAGGER } from './auth.swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(SWAGGER.LOGIN.OPERATION)
  @ApiBody(SWAGGER.LOGIN.BODY)
  @ApiResponse(SWAGGER.LOGIN.RESPONSE_STATUS_200)
  @Post('login')
  async login(@Body() dto: LoginUserDto): Promise<LoginUserRdo> {
    const { accessToken, refreshToken } = await this.authService.login(dto);
    return { accessToken, refreshToken };
  }
}
