import { Body, Controller, Post } from '@nestjs/common';
import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegisterRequest,
  UserRegisterResponse,
} from '@project/shared-dtos';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: UserRegisterRequest })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: UserRegisterResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'User with this email already exists',
  })
  async register(
    @Body() dto: UserRegisterRequest
  ): Promise<UserRegisterResponse> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'User log in' })
  @ApiBody({ type: UserLoginRequest })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged',
    type: UserLoginResponse,
  })
  async login(@Body() dto: UserLoginRequest): Promise<UserLoginResponse> {
    const { accessToken, refreshToken } = await this.authService.login(dto);
    return { accessToken, refreshToken };
  }
}
