import argon2 from 'argon2';
import { Entity } from '@project/shared-core';
import { CreateUserDto } from '@project/shared-dtos';
import { User } from '@project/shared-types';
import { UserModel } from '../models/user.model';

/** TODO заглушка для аватара */
const DEFAULT_AVATAR_SRC = 'https://picsum.photos/300/300';

export class UserEntity implements Entity<string> {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  private passwordHash: string;
  readonly avatarSrc: string;

  private constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.fullName = user.fullName;
    this.avatarSrc = user.avatarSrc ?? DEFAULT_AVATAR_SRC;
  }

  public static async create(user: CreateUserDto): Promise<UserEntity> {
    const { email, fullName, password, avatarSrc } = user;
    return new UserEntity({ email, fullName, avatarSrc }).setPassword(password);
  }

  private async setPassword(password: string): Promise<UserEntity> {
    this.passwordHash = await argon2.hash(password);
    return this;
  }

  static fromObject(user: UserModel): UserEntity {
    const { _id, email, fullName, passwordHash, avatarSrc } = user;
    const id = _id as string;
    const userEntity = new UserEntity({ id, email, fullName, avatarSrc });
    userEntity.passwordHash = passwordHash;
    return userEntity;
  }

  public async updatePassword(password: string): Promise<UserEntity> {
    await this.setPassword(password);
    return this;
  }

  public async validatePassword(password: string): Promise<boolean> {
    return argon2.verify(this.passwordHash, password);
  }

  public getInfo(): User {
    const { id, email, fullName, avatarSrc } = this;
    return { id, email, fullName, avatarSrc };
  }

  public toPOJO(): Record<string, unknown> {
    const { id, email, fullName, passwordHash, avatarSrc } = this;
    return { id, email, fullName, passwordHash, avatarSrc };
  }
}
