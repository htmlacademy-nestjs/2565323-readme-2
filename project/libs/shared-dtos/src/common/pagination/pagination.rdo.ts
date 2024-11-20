import { IsArray, IsInt, Min } from 'class-validator';

export class PaginationRDO<T> {
  @IsArray()
  items: T[];

  @IsInt()
  @Min(0)
  totalCount: number;
}
