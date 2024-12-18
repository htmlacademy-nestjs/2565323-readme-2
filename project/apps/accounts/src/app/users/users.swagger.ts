import {
  ChangePasswordDTO,
  CreateUserDTO, LoginUserDTO,
  UserRDO
} from '@project/shared-dtos';
import {
  INVALID_PASSWORD,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
} from './users.const';

export const SWAGGER = {
  CREATE: {
    OPERATION: { summary: 'Create user' },
    BODY: {
      type: CreateUserDTO,
    },
    RESPONSE_STATUS_201: {
      status: 201,
      description: 'User created successfully',
      type: UserRDO,
    },
    RESPONSE_STATUS_409: {
      status: 409,
      description: USER_ALREADY_EXISTS,
    },
  },
  GET_INFO: {
    OPERATION: { summary: 'Get user info' },
    PARAM: {
      name: 'id',
      description: `User's id`,
      example: 'abcd1234',
    },
    RESPONSE_STATUS_200: {
      status: 200,
      description: `User's info`,
      type: UserRDO,
    },
    RESPONSE_STATUS_404: {
      status: 404,
      description: USER_NOT_FOUND,
    },
  },
  CHANGE_PASSWORD: {
    OPERATION: { summary: `Change user's password` },
    BODY: {
      type: ChangePasswordDTO,
    },
    RESPONSE_STATUS_200: {
      status: 200,
      description: 'User changed password',
      type: UserRDO,
    },
    RESPONSE_STATUS_401: {
      status: 401,
      description: INVALID_PASSWORD,
    },
    RESPONSE_STATUS_404: {
      status: 404,
      description: USER_NOT_FOUND,
    },
  },
  VERIFY: {
    OPERATION: { summary: `Verify user` },
    BODY: {
      type: LoginUserDTO,
    },
    RESPONSE_STATUS_200: {
      status: 200,
      description: 'User is verified',
      type: UserRDO,
    },
  }
};
