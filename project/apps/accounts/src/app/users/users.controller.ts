import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import {
  ChangePasswordDto,
  ChangePasswordRdo,
  CreateUserDto,
  CreateUserRdo,
} from '@project/shared-dtos';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  INVALID_PASSWORD,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
} from './users.const';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: CreateUserRdo,
  })
  @ApiResponse({
    status: 409,
    description: USER_ALREADY_EXISTS,
  })
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user info' })
  @ApiParam({
    name: 'id',
    description: `User's id`,
    example: 'abcd1234',
  })
  @ApiResponse({
    status: 200,
    description: `User's info`,
    type: CreateUserRdo,
  })
  @ApiResponse({
    status: 404,
    description: USER_NOT_FOUND,
  })
  async getInfo(@Param('id') id: string) {
    return this.usersService.getInfo(id);
  }

  /** TODO добавить JwtAuthGuard - доступно только авторизованным пользователям */
  @Post(':id/password')
  @ApiOperation({ summary: `Change user's password` })
  @ApiParam({
    name: 'id',
    description: `User's id`,
    example: 'abcd1234',
  })
  @ApiBody({
    type: ChangePasswordDto,
  })
  @ApiResponse({
    status: 200,
    description: 'User changed password',
    type: ChangePasswordRdo,
  })
  @ApiResponse({
    status: 401,
    description: INVALID_PASSWORD,
  })
  @ApiResponse({
    status: 404,
    description: USER_NOT_FOUND,
  })
  async changePassword(
    @Param('id') id: string,
    @Body() dto: ChangePasswordDto
  ) {
    return this.usersService.changePassword(id, dto);
  }
}
