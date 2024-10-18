import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/shared-config/posts';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prismaClientService: PrismaClientService) {}

  async getAll(): Promise<Post[]> {
    return this.prismaClientService.post.findMany();
  }
}
