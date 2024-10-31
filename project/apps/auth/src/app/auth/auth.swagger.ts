import { LoginUserDto, LoginUserRdo } from '@project/shared-dtos';

export const SWAGGER = {
  LOGIN: {
    OPERATION: { summary: 'User log in' },
    BODY: { type: LoginUserDto },
    RESPONSE_STATUS_200: {
      status: 200,
      description: 'User successfully logged',
      type: LoginUserRdo,
    },
  },
};
