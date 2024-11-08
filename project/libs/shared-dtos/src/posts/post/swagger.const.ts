export const SWAGGER = {
  ID: {
    description: `Post's id`,
    example: '0289a9da-54e8-4a43-b3b5-0aba9a5609a0',
  },
  TITLE: {
    DESCRIPTION: `Post's title`,
    EXAMPLE: 'Основы правил проектирования базы данных',
    MIN_LENGTH: 20,
    MAX_LENGTH: 50,
  },
  CONTENT: {
    DESCRIPTION: `Post's content`,
    EXAMPLE: 'Подробности тут https://habr.com/ru/articles/514364/',
    MIN_LENGTH: 100,
    MAX_LENGTH: 1024,
  },
  CREATED_AT: {
    description: `Post's creation date`,
    example: '2024-10-14 13:51:40.51',
  },
  USER_ID: {
    description: `User's id`,
    example: '6702a9f1c77e44a8b17d99ec',
  }
}
