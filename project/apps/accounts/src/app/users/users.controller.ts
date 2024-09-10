import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import {
  UserChangePasswordRequest,
  UserChangePasswordResponse,
  UserGetInfoResponse, UserRegisterRequest, UserRegisterResponse
} from '@project/shared-dtos';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({
    type: UserRegisterRequest,
  })
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
    type: UserRegisterResponse,
  })
  @ApiResponse({
    status: 409,
    description: 'User with this email already exists',
  })
  async create(@Body() dto: UserRegisterRequest) {
    return this.usersService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user info' })
  @ApiParam({
    name: 'id',
    description: 'The unique ID of the user',
    example: 'abcd1234',
  })
  @ApiResponse({
    status: 200,
    description: 'The user information',
    type: UserGetInfoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async getInfo(@Param('id') id: string) {
    return this.usersService.getInfo(id);
  }

  /** TODO добавить JwtAuthGuard - доступно только авторизованным пользователям */
  @Post(':id/password')
  @ApiOperation({ summary: 'Change user password' })
  @ApiParam({
    name: 'id',
    description: 'The unique ID of the user',
    example: 'abcd1234',
  })
  @ApiBody({
    type: UserChangePasswordRequest,
  })
  @ApiResponse({
    status: 200,
    description: 'User successfully changed password',
    type: UserChangePasswordResponse,
  })
  @ApiResponse({
    status: 401,
    description: 'Current password is incorrect',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async changePassword(
    @Param('id') id: string,
    @Body() dto: UserChangePasswordRequest
  ) {
    return this.usersService.changePassword(id, dto);
  }
}
