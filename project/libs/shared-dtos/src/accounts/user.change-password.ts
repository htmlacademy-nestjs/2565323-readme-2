import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserChangePasswordRequest {
  @ApiProperty({
    description: 'The current password of the user',
    example: 'password123',
    minLength: 6,
    maxLength: 12,
  })
  @IsString()
  @MaxLength(12)
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'The new password of the user',
    example: 'password321',
    minLength: 6,
    maxLength: 12,
  })
  @IsString()
  @MaxLength(12)
  @MinLength(6)
  newPassword: string;
}

export class UserChangePasswordResponse {
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
