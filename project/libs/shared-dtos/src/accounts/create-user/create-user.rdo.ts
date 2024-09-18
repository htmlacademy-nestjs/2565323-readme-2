import { ApiProperty } from '@nestjs/swagger';
import { Swagger } from './const.swagger';

export class CreateUserRdo {
  @ApiProperty({
    description: Swagger.id.description,
    example: Swagger.id.example,
  })
  id: string;

  @ApiProperty({
    description: Swagger.email.description,
    example: Swagger.email.example,
  })
  email: string;

  @ApiProperty({
    description: Swagger.fullName.description,
    example: Swagger.fullName.example,
  })
  fullName: string;

  @ApiProperty({
    description: Swagger.avatarSrc.description,
    example: Swagger.avatarSrc.example,
  })
  avatarSrc: string;
}
