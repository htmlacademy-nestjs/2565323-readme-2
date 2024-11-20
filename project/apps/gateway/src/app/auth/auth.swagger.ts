import { LoginUserDTO, LoginUserRDO } from '@project/shared-dtos';

export const SWAGGER = {
  LOGIN: {
    OPERATION: { summary: 'User log in' },
    BODY: { type: LoginUserDTO },
    RESPONSE_STATUS_200: {
      status: 200,
      description: 'User successfully logged',
      type: LoginUserRDO,
    },
  },
};
