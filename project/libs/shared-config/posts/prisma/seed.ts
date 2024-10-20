import { PrismaClient } from '@prisma/client';

const FIRST_USER_ID = '6702a9f1c77e44a8b17d99ec';
const SECOND_USER_ID = '5502b9f1b73e44a8b17d81qw';

const FIRST_POST_ID = '0289a9da-54e8-4a43-b3b5-0aba9a5609a0';
const SECOND_POST_ID = '55b3c9b0-6ac6-4d4c-bcca-c0326bcafbf6';

const getPosts = () => {
  return [
    {
      id: FIRST_POST_ID,
      title: 'Основы правил проектирования базы данных',
      content: 'Подробности тут https://habr.com/ru/articles/514364/',
      userId: FIRST_USER_ID,
      comments: [
        {
          id: '63e80fba-6bc4-442f-bfde-0c591ea70177',
          message: 'Интересно',
          userId: SECOND_USER_ID,
        },
        {
          id: '770e4ca4-c892-4746-8115-cc66eb925c91',
          message: 'Нужно больше статей подобной тематики',
          userId: SECOND_USER_ID,
        },
        {
          id: 'a4cede66-c9b1-4131-9948-d83cf61bd85d',
          message: 'ок, скоро будет еще одна',
          userId: FIRST_USER_ID,
        }
      ]
    },
    {
      id: SECOND_POST_ID,
      title: 'Prisma ORM: полное руководство для начинающих (и не только). Часть 1',
      content: 'Подробности тут https://habr.com/ru/companies/timeweb/articles/654341/',
      userId: SECOND_USER_ID,
      comments: [
        {
          id: '0b27b581-b95f-4d5c-aab9-4d1cc49ce711',
          message: 'Жду вторую часть',
          userId: FIRST_USER_ID,
        }
      ]
    }
  ];
}

const seedDb = async (prismaClient: PrismaClient) => {
  const mockPosts = getPosts();
  for (const post of mockPosts) {
    await prismaClient.post.create({
      data: {
        id: post.id,
        title: post.title,
        content: post.content,
        userId: post.userId,
        comments: post.comments ? {
          create: post.comments
        } : undefined
      }
    });
  }

  console.info('Database seed success');
}

const bootstrap = async () => {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}

bootstrap();
