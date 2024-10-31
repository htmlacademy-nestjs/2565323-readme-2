import { IsInt, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SWAGGER } from './const.swagger';

export class PaginationDto {
  @ApiPropertyOptional(SWAGGER.OFFSET)
  @IsOptional()
  @IsInt()
  @Min(SWAGGER.OFFSET.minLength)
  offset?: number;

  @ApiPropertyOptional(SWAGGER.LIMIT)
  @IsOptional()
  @IsInt()
  @Min(SWAGGER.LIMIT.minLength)
  limit?: number;
}
