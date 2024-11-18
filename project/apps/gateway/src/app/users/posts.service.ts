import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PaginationRDO, PostFilterDTO, PostRDO } from '@project/shared-dtos';

import { POSTS_BASE_URL } from './posts.const';

@Injectable()
export class PostsService {
  constructor(
    private readonly httpService: HttpService
    ) {}

  async getPosts(filter: PostFilterDTO): Promise<PaginationRDO<PostRDO>> {
    const url = `${POSTS_BASE_URL}/posts`;

    const { data } = await this.httpService.axiosRef.get(url, {
      params: filter,
    });

    return data;
  }
}
