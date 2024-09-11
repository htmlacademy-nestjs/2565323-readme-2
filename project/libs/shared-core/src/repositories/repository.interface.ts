import { Entity } from './entity.interface';

export interface Repository<Type extends Entity> {
  getAll(): Type[];
  getById(id: string): Type | undefined;
  save(product: Type): void;
  update(product: Type): void;
}
