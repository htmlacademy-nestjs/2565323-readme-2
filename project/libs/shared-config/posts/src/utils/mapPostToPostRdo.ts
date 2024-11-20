import { Post } from '@prisma/client';
import { PostRDO } from '@project/shared-dtos';

export const mapPostToPostRdo = (post: Post): PostRDO => ({
  id: post.id,
  title: post.title,
  content: post.content,
  createdAt: post.createdAt,
  userId: post.userId,
})
