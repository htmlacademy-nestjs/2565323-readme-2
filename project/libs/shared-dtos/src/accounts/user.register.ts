import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserRegisterRequest {
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@google.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The full name of the user',
    example: 'John Doe',
    maxLength: 50,
    minLength: 3,
  })
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  fullName: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    minLength: 6,
    maxLength: 12,
  })
  @IsString()
  @MaxLength(12)
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({
    description: 'The avatar source URL of the user',
    example: 'https://example.com/avatar.jpg',
  })
  @IsString()
  @IsOptional()
  avatarSrc?: string;
}

export class UserRegisterResponse {
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
