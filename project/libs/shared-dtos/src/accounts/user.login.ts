import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginRequest {
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@google.com',
  })
  @IsEmail()
  email: string;

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
}

export class UserLoginResponse {
  @ApiProperty({
    description: 'The access token of the user',
    example: 'a1bc.123.yUxz',
  })
  accessToken: string;

  @ApiProperty({
    description: 'The refresh token of the user',
    example: 'acde.3e21.UUiy',
  })
  refreshToken: string;
}
