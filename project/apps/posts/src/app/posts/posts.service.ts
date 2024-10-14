import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '@project/shared-config/posts';


@Injectable()
export class PostsService {
  constructor(private readonly prismaClientService: PrismaClientService) {
  }

  async getAll() {
    return this.prismaClientService.post.findMany();
  }
}
