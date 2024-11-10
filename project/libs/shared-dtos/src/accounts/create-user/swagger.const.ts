export const SWAGGER = {
  ID: {
    DESCRIPTION: `User's id`,
    EXAMPLE: '550e8400-e29b-41d4-a716-446655440000',
  },
  EMAIL: {
    DESCRIPTION: `User's email`,
    EXAMPLE: 'john.doe@google.com',
  },
  FULL_NAME: {
    DESCRIPTION: `User's full name`,
    EXAMPLE: 'John Doe',
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  PASSWORD: {
    DESCRIPTION: `User's password`,
    EXAMPLE: 'password123',
    MIN_LENGTH: 6,
    MAX_LENGTH: 12,
  },
  AVATAR_SRC: {
    DESCRIPTION: `User's avatar source url`,
    EXAMPLE: 'https://picsum.photos/300/300',
  },
};
