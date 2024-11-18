export const SWAGGER = {
  ID: {
    DESCRIPTION: `User's id`,
    EXAMPLE: '550e8400-e29b-41d4-a716-446655440000',
  },
  EMAIL: {
    DESCRIPTION: `User's email`,
    EXAMPLE: 'john.doe@google.com',
  },
  FIRST_NAME: {
    DESCRIPTION: `User's first name`,
    EXAMPLE: 'John',
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  LAST_NAME: {
    DESCRIPTION: `User's last name`,
    EXAMPLE: 'Doe',
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  AVATAR_SRC: {
    DESCRIPTION: `User's avatar source url`,
    EXAMPLE: 'https://picsum.photos/300/300',
  },
  CREATED_AT: {
    DESCRIPTION: `User's creation date`,
    EXAMPLE: '2024-11-16T11:22:33.392Z',
  },
};
