import { BaseMemoryRepository } from '@project/shared-core';
import { UserEntity } from '../entities/user.entity';

export class UsersMemoryRepository extends BaseMemoryRepository<UserEntity> {
  getByEmail(email: string): UserEntity | null {
    this.entities.forEach((it) => {
      if (it.email === email) {
        return it;
      }
    });
    return null;
  }
}
