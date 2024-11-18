import argon2 from 'argon2';
import { Entity } from '@project/shared-core';
import { CreateUserDTO } from '@project/shared-dtos';
import { User } from '@project/shared-types';
import { UserModel } from '../models/user.model';

export class UserEntity implements Entity<string> {
  readonly id: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  private passwordHash: string;
  readonly avatarSrc: string;
  readonly createdAt: Date;

  private constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.avatarSrc = user.avatarSrc;
    this.createdAt = user.createdAt;
  }

  public static async create(user: CreateUserDTO): Promise<UserEntity> {
    const { email, firstName, lastName, password, avatarSrc } = user;
    return new UserEntity({ email, firstName, lastName, avatarSrc }).setPassword(password);
  }

  private async setPassword(password: string): Promise<UserEntity> {
    this.passwordHash = await argon2.hash(password);
    return this;
  }

  static fromObject(user: UserModel): UserEntity {
    const { id, email, firstName, lastName, passwordHash, avatarSrc, createdAt } = user;
    const userEntity = new UserEntity({ id, email, firstName, lastName, avatarSrc, createdAt });
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
    const { id, email, firstName, lastName, avatarSrc, createdAt } = this;
    return { id, email, firstName, lastName, avatarSrc, createdAt };
  }

  public toPOJO(): Record<string, unknown> {
    const { id, email, firstName, lastName, passwordHash, avatarSrc, createdAt } = this;
    return { id, email, firstName, lastName, passwordHash, avatarSrc, createdAt };
  }
}
