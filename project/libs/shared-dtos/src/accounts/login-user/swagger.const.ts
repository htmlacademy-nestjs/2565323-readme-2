export const SWAGGER = {
  EMAIL: {
    DESCRIPTION: `User's email`,
    EXAMPLE: 'john.doe@google.com',
  },
  PASSWORD: {
    DESCRIPTION: `User's password`,
    EXAMPLE: 'password123',
    MIN_LENGTH: 6,
    MAX_LENGTH: 12,
  },
  ACCESS_TOKEN: {
    DESCRIPTION: `User's access token`,
    EXAMPLE:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  },
  REFRESH_TOKEN: {
    DESCRIPTION: `User's refresh token`,
    EXAMPLE: 'dGVzdF9yZWZyZXNoX3Rva2VuX3N0cmluZw==',
  },
};
