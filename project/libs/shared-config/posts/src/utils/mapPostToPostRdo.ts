import { Post } from '@prisma/client';
import { PostRdo } from '@project/shared-dtos';

export const mapPostToPostRdo = (post: Post): PostRdo => ({
  id: post.id,
  title: post.title,
  content: post.content,
  createdAt: post.createdAt,
  userId: post.userId,
})
