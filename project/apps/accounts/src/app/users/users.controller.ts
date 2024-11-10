import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ChangePasswordDto, CreateUserDto } from '@project/shared-dtos';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '@project/shared-config/auth';

import { SWAGGER } from './users.swagger';
import { UsersService } from './users.service';
import { NotifyService } from '../notify/notify.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly notifyService: NotifyService
  ) {}

  @ApiOperation(SWAGGER.CREATE.OPERATION)
  @ApiBody(SWAGGER.CREATE.BODY)
  @ApiResponse(SWAGGER.CREATE.RESPONSE_STATUS_201)
  @ApiResponse(SWAGGER.CREATE.RESPONSE_STATUS_409)
  @Post()
  async create(@Body() dto: CreateUserDto) {
    const user = await this.usersService.create(dto);

    const { email, fullName } = user;
    await this.notifyService.registerSubscriber( { email, fullName });

    return user;
  }

  @ApiOperation(SWAGGER.GET_INFO.OPERATION)
  @ApiParam(SWAGGER.GET_INFO.PARAM)
  @ApiResponse(SWAGGER.GET_INFO.RESPONSE_STATUS_200)
  @ApiResponse(SWAGGER.GET_INFO.RESPONSE_STATUS_404)
  @Get(':id')
  async getInfo(@Param('id') id: string) {
    return this.usersService.getInfo(id);
  }

  @ApiOperation(SWAGGER.CHANGE_PASSWORD.OPERATION)
  @ApiParam(SWAGGER.CHANGE_PASSWORD.PARAM)
  @ApiBody(SWAGGER.CHANGE_PASSWORD.BODY)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_200)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_401)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_404)
  @UseGuards(JwtAuthGuard)
  @Patch(':id/password')
  async changePassword(
    @Param('id') id: string,
    @Body() dto: ChangePasswordDto
  ) {
    return this.usersService.changePassword(id, dto);
  }
}
