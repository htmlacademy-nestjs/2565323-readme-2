import { Injectable, NotFoundException } from '@nestjs/common';
import {
  mapPostToPostRdo,
  PrismaClientService,
} from '@project/shared-config/posts';
import { PostRdo, PostDto, PaginationDto } from '@project/shared-dtos';
import { POST_NOT_FOUND } from './posts.const';

@Injectable()
export class PostsService {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  async getPosts({ offset = 0, limit = 10 }: PaginationDto): Promise<PostRdo[]> {
    const posts = await this.prismaClientService.post.findMany(
      {
        skip: offset,
        take: limit
      }
    );
    return posts.map(mapPostToPostRdo);
  }

  async create(dto: PostDto, userId: string): Promise<PostRdo> {
    const post = await this.prismaClientService.post.create({
      data: { ...dto, userId },
    });
    return mapPostToPostRdo(post);
  }

  async delete(postId: string, userId: string): Promise<PostRdo> {
    const post = await this.prismaClientService.post.findUnique({
      where: { id: postId, userId },
    });

    if (!post) {
      throw new NotFoundException(POST_NOT_FOUND);
    }

    await this.prismaClientService.post.deleteMany({
      where: { id: postId, userId },
    });

    return mapPostToPostRdo(post);
  }
}
