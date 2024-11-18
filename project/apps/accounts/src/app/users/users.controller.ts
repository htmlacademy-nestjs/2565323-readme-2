import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post, Req,
  UseGuards
} from '@nestjs/common';
import { ChangePasswordDTO, CreateUserDTO, LoginUserDTO, ReqWithUserDTO } from '@project/shared-dtos';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '@project/shared-config/auth-common';

import { SWAGGER } from './users.swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @ApiOperation(SWAGGER.CREATE.OPERATION)
  @ApiBody(SWAGGER.CREATE.BODY)
  @ApiResponse(SWAGGER.CREATE.RESPONSE_STATUS_201)
  @ApiResponse(SWAGGER.CREATE.RESPONSE_STATUS_409)
  @Post()
  async create(@Body() dto: CreateUserDTO) {
    return this.usersService.create(dto);
  }

  @ApiOperation(SWAGGER.GET_INFO.OPERATION)
  @ApiParam(SWAGGER.GET_INFO.PARAM)
  @ApiResponse(SWAGGER.GET_INFO.RESPONSE_STATUS_200)
  @ApiResponse(SWAGGER.GET_INFO.RESPONSE_STATUS_404)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getInfo(@Param('id') id: string) {
    return this.usersService.getInfo(id);
  }

  @ApiOperation(SWAGGER.CHANGE_PASSWORD.OPERATION)
  @ApiBody(SWAGGER.CHANGE_PASSWORD.BODY)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_200)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_401)
  @ApiResponse(SWAGGER.CHANGE_PASSWORD.RESPONSE_STATUS_404)
  @UseGuards(JwtAuthGuard)
  @Patch('/password')
  async changePassword(
    @Req() { user }: ReqWithUserDTO,
    @Body() dto: ChangePasswordDTO
  ) {
    return this.usersService.changePassword(user.id, dto);
  }

  @ApiOperation(SWAGGER.VERIFY.OPERATION)
  @ApiBody(SWAGGER.VERIFY.BODY)
  @ApiResponse(SWAGGER.VERIFY.RESPONSE_STATUS_200)
  @Post('verify')
  async verify(@Body() dto: LoginUserDTO) {
    return this.usersService.verify(dto);
  }
}
