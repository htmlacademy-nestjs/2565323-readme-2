export const Swagger = {
  email: {
    description: `User's email`,
    example: 'john.doe@google.com',
  },
  password: {
    description: `User's password`,
    example: 'password123',
    minLength: 6,
    maxLength: 12,
  },
  accessToken: {
    description: `User's access token`,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  },
  refreshToken: {
    description: `User's refresh token`,
    example: 'dGVzdF9yZWZyZXNoX3Rva2VuX3N0cmluZw==',
  },
};
