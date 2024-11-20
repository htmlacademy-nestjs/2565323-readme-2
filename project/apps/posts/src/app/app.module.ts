import { Module } from '@nestjs/common';
import { AppConfigModule } from '@project/shared-config/app-common';
import { PostConfigModule } from '@project/shared-config/posts';

import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AppConfigModule, PostConfigModule, PostsModule],
})
export class AppModule {}
