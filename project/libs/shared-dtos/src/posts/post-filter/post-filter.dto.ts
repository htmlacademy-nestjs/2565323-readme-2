import { IsIn, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { SWAGGER } from './swagger.const';
import { PaginationDTO } from '../../common/pagination';

export class PostFilterDTO extends PaginationDTO {
  @ApiProperty({
    description: SWAGGER.USER_ID.DESCRIPTION,
    example: SWAGGER.USER_ID.EXAMPLE,
  })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    description: SWAGGER.SORT_BY.DESCRIPTION,
    example: SWAGGER.SORT_BY.EXAMPLE,
  })
  @IsIn(['createdAt'])
  @IsOptional()
  sortBy?: string;

  @ApiProperty({
    description: SWAGGER.SORT_DIRECTION.DESCRIPTION,
    example: SWAGGER.SORT_DIRECTION.EXAMPLE,
  })
  @IsIn(['desc', 'asc'])
  @IsOptional()
  sortDirection?: string;
}
