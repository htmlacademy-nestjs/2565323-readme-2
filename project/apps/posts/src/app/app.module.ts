import { Module } from '@nestjs/common';
import { ConfigPostModule } from '@project/shared-config/posts';

import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ConfigPostModule, PostsModule],
})
export class AppModule {}
