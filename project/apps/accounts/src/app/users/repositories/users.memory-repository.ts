import { MemoryRepository } from '@project/shared-core';
import { UserEntity } from '../entities/user.entity';

export class UsersMemoryRepository extends MemoryRepository<UserEntity> {
  getByEmail(email: string): UserEntity {
    return this.entities.find((it) => it.email === email);
  }
}
