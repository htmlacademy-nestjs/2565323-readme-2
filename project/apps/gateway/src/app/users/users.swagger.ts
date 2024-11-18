import { USER_NOT_FOUND } from './users.const';

export const SWAGGER = {
  GET_INFO: {
    SUMMARY: 'Get user info',
    PARAM: {
      name: 'id',
      description: `User's id`,
      example: 'abcd1234',
    },
    RESPONSE_STATUS_200: 'User info got',
    RESPONSE_STATUS_404: USER_NOT_FOUND,
  },
  GET_USER_POSTS: {
    SUMMARY: "Getting user's posts",
    QUERY_DESCRIPTION: 'Query parameters to filter posts',
    RESPONSE_200: 'User posts got',
  },
};
