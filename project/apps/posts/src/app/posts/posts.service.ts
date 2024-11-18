import { Injectable } from '@nestjs/common';
import {
  mapPostToPostRdo,
  PrismaClientService,
} from '@project/shared-config/posts';
import {
  PostRDO,
  PostDTO,
  PostFilterDTO,
  PaginationRDO,
} from '@project/shared-dtos';

@Injectable()
export class PostsService {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  async getPosts({
    offset = 0,
    limit = 25,
    userId,
    sortBy = 'createdAt',
    sortDirection = 'desc'
  }: PostFilterDTO): Promise<PaginationRDO<PostRDO>> {
    const totalPosts = await this.prismaClientService.post.count({
      where: {
        userId,
      },
      orderBy: {
        [sortBy]: sortDirection
      },
    });

    const posts = await this.prismaClientService.post.findMany({
      where: {
        userId,
      },
      skip: offset,
      take: limit,
      orderBy: {
        [sortBy]: sortDirection
      },
    });

    return { items: posts.map(mapPostToPostRdo), totalCount: totalPosts };
  }

  async create(dto: PostDTO, userId: string): Promise<PostRDO> {
    const post = await this.prismaClientService.post.create({
      data: { ...dto, userId },
    });
    return mapPostToPostRdo(post);
  }

  async delete(postId: string, userId: string): Promise<void> {
    await this.prismaClientService.post.deleteMany({
      where: { id: postId, userId },
    });
  }
}
