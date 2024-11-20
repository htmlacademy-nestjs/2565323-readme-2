import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetJwtToken } from '@project/shared-core';
import {
  PaginationRDO,
  PostFilterDTO,
  PostRDO,
  UserRDO,
  UserInfoRDO
} from '@project/shared-dtos';

import { UsersService } from './users.service';
import { SWAGGER } from './users.swagger';
import { PostsService } from './posts.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService
  ) {}

  @ApiOperation({
    summary: SWAGGER.GET_INFO.SUMMARY,
  })
  @ApiParam(SWAGGER.GET_INFO.PARAM)
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.GET_INFO.RESPONSE_STATUS_200,
    type: UserRDO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: SWAGGER.GET_INFO.RESPONSE_STATUS_404,
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getInfo(
    @Param('id') id: string,
    @GetJwtToken() token: string
  ): Promise<UserInfoRDO> {
    const [user, { totalCount: postCount }] = await Promise.all([
      this.usersService.getInfo(id, token),
      this.postsService.getPosts({ userId: id }),
    ]);

    return {
      user,
      postCount,
    };
  }

  @ApiOperation({
    summary: SWAGGER.GET_USER_POSTS.SUMMARY,
  })
  @ApiQuery({
    name: 'query',
    type: PostFilterDTO,
    description: SWAGGER.GET_USER_POSTS.QUERY_DESCRIPTION,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.GET_USER_POSTS.RESPONSE_200,
    type: PaginationRDO<PostRDO>,
  })
  @Get(':userId/posts')
  async getUserPosts(
    @Param('userId') userId: string,
    @Query() filterDTO: PostFilterDTO
  ): Promise<PaginationRDO<PostRDO>> {
    return this.postsService.getPosts({ ...filterDTO, userId });
  }
}
