import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  PostRDO,
  PostDTO,
  ReqWithUserDTO,
  PostFilterDTO,
  PaginationRDO,
} from '@project/shared-dtos';
import { JwtAuthGuard } from '@project/shared-config/auth-common';

import { PostsService } from './posts.service';
import { SWAGGER } from './posts.swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({
    summary: SWAGGER.GET_POSTS.SUMMARY,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: SWAGGER.GET_POSTS.RESPONSE_200,
    type: PaginationRDO<PostRDO>,
  })
  @Get()
  async getPosts(
    @Query() filterDto: PostFilterDTO
  ): Promise<PaginationRDO<PostRDO>> {
    return this.postsService.getPosts(filterDto);
  }

  @ApiOperation({
    summary: SWAGGER.CREATE.SUMMARY,
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: SWAGGER.CREATE.RESPONSE_201,
    type: PostRDO,
  })
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() dto: PostDTO,
    @Req() { user }: ReqWithUserDTO
  ): Promise<PostRDO> {
    return this.postsService.create(dto, user.id);
  }

  @ApiOperation({
    summary: SWAGGER.DELETE.SUMMARY,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: SWAGGER.DELETE.RESPONSE_204,
  })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(
    @Param('id') postId: string,
    @Req() { user }: ReqWithUserDTO
  ): Promise<void> {
    return this.postsService.delete(postId, user.id);
  }
}
