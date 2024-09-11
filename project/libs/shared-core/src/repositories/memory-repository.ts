import { randomUUID } from 'node:crypto';
import { Entity } from './entity.interface';
import { Repository } from './repository.interface';

export class MemoryRepository<T extends Entity> implements Repository<T> {
  protected entities: T[] = [];

  public getAll(): T[] {
    return this.entities.map((entity) => ({ ...entity }));
  }

  public getById(id: string): T | undefined {
    const existEntity = this.entities.find((item) => item.id === id);

    if (!existEntity) {
      throw new Error(`Entity with id ${id} does not found`);
    }

    return { ...existEntity };
  }

  public save(entity: T): void {
    if (entity.id) {
      throw new Error(`Entity already has an id - ${entity.id}`);
    }

    entity.id = randomUUID();
    this.entities.push(entity);
  }

  public update(entity: T): void {
    const existsEntityIndex = this.entities.findIndex(
      (item) => item.id === entity.id
    );
    if (existsEntityIndex === -1) {
      throw new Error(`Entity with ${entity.id} not found!`);
    }

    this.entities[existsEntityIndex] = { ...entity };
  }
}
