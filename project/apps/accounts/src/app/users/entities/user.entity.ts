import { compare, genSalt, hash } from 'bcryptjs';
import { Entity } from '@project/shared-core';
import { User } from '@project/shared-types';

export class UserEntity implements Entity {
  id: string;
  email: string;
  fullName: string;
  passwordHash: string;
  avatarSrc?: string;

  constructor({ id, email, fullName, avatarSrc }: Omit<User, 'passwordHash'>) {
    this.id = id;
    this.email = email;
    this.fullName = fullName;
    this.avatarSrc = avatarSrc;
  }

  public async setPassword(password: string) {
    const salt = await genSalt(10);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public validatePassword(password: string) {
    return compare(password, this.passwordHash);
  }

  public getInfo() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...userWithoutPassword } = this;
    return userWithoutPassword;
  }
}
