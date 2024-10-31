import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { PostRdo, PostDto, PaginationDto } from '@project/shared-dtos';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts(@Query() paginationDto: PaginationDto): Promise<PostRdo[]> {
    return this.postsService.getPosts(paginationDto);
  }

  @Post('')
  async create(@Body() dto: PostDto): Promise<PostRdo> {
    // TODO авторизовать пользователя
    const userId = '6702a9f1c77e44a8b17d99ec';
    return this.postsService.create(dto, userId);
  }

  @Delete(':id')
  async delete(@Param('id') postId: string): Promise<PostRdo> {
    // TODO авторизовать пользователя
    // const userId = '6702a9f1c77e44a8b17d99ec';
    const userId = '5502b9f1b73e44a8b17d81qw';
    return this.postsService.delete(postId, userId);
  }
}
