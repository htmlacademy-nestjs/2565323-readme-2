import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SWAGGER } from './swagger.const';

export class PaginationDTO {
  @ApiPropertyOptional({
    description: SWAGGER.OFFSET.DESCRIPTION,
    example: SWAGGER.OFFSET.EXAMPLE,
    minLength: SWAGGER.OFFSET.MIN_LENGTH,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(SWAGGER.OFFSET.MIN_LENGTH)
  offset?: number;

  @ApiPropertyOptional({
    description: SWAGGER.LIMIT.DESCRIPTION,
    example: SWAGGER.LIMIT.EXAMPLE,
    minLength: SWAGGER.LIMIT.MIN_LENGTH,
  })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(SWAGGER.LIMIT.MIN_LENGTH)
  limit?: number;
}
