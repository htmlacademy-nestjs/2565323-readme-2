export const SWAGGER = {
  ID: {
    description: `User's id`,
    example: '550e8400-e29b-41d4-a716-446655440000',
  },
  EMAIL: {
    description: `User's email`,
    example: 'john.doe@google.com',
  },
  FULL_NAME: {
    description: `User's full name`,
    example: 'John Doe',
    maxLength: 50,
    minLength: 3,
  },
  PASSWORD: {
    description: `User's password`,
    example: 'password123',
    minLength: 6,
    maxLength: 12,
  },
  AVATAR_SRC: {
    description: `User's avatar source url`,
    example: 'https://picsum.photos/300/300',
  },
};
