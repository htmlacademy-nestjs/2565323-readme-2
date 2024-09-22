export const Swagger = {
  id: {
    description: `User's id`,
    example: '550e8400-e29b-41d4-a716-446655440000',
  },
  email: {
    description: `User's email`,
    example: 'john.doe@google.com',
  },
  fullName: {
    description: `User's full name`,
    example: 'John Doe',
    maxLength: 50,
    minLength: 3,
  },
  password: {
    description: `User's password`,
    example: 'password123',
    minLength: 6,
    maxLength: 12,
  },
  avatarSrc: {
    description: `User's avatar source url`,
    example: 'https://picsum.photos/300/300',
  },
};
