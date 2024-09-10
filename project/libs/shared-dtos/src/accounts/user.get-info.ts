import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserGetInfoRequest {}

export class UserGetInfoResponse {
  @ApiProperty({
    description: 'The ID of the registered user',
    example: 'abcd1234',
  })
  id: string;

  @ApiProperty({
    description: 'The email of the registered user',
    example: 'john.doe@google.com',
  })
  email: string;

  @ApiProperty({
    description: 'The full name of the registered user',
    example: 'John Doe',
  })
  fullName: string;

  @ApiPropertyOptional({
    description: 'The avatar source URL of the registered user',
    example: 'https://example.com/avatar.jpg',
  })
  avatarSrc?: string;
}
