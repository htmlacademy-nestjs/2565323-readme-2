import { Body, Controller, Post } from '@nestjs/common';
import {
  LoginUserDto,
  LoginUserRdo,
  CreateUserDto,
  CreateUserRdo,
} from '@project/shared-dtos';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { USER_ALREADY_EXISTS } from './auth.const';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: CreateUserRdo,
  })
  @ApiResponse({
    status: 409,
    description: USER_ALREADY_EXISTS,
  })
  async register(@Body() dto: CreateUserDto): Promise<CreateUserRdo> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'User log in' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged',
    type: LoginUserRdo,
  })
  async login(@Body() dto: LoginUserDto): Promise<LoginUserRdo> {
    const { accessToken, refreshToken } = await this.authService.login(dto);
    return { accessToken, refreshToken };
  }
}
