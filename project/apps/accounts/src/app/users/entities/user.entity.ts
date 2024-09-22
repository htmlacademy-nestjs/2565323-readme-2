import crypto from 'node:crypto';
import { Entity } from '@project/shared-core';
import { User, AuthUser } from '@project/shared-types';
import { UserModel } from '../models/user.model';
import { CreateUserDto } from '@project/shared-dtos';

/** TODO заглушка для аватара */
const avatarDefaultSrc = 'https://picsum.photos/300/300';

export class UserEntity implements Entity<string> {
  readonly id: string;
  readonly email: string;
  readonly fullName: string;
  private _passwordSalt: string;
  private _passwordHash: string;
  readonly avatarSrc: string;

  public constructor(user: AuthUser);
  public constructor(user: CreateUserDto);
  public constructor(user: AuthUser | CreateUserDto) {
    this.email = user.email;
    this.fullName = user.fullName;
    this.avatarSrc = user.avatarSrc ?? avatarDefaultSrc;

    if (user instanceof CreateUserDto) {
      this.id = crypto.randomUUID();
      const { passwordSalt, passwordHash } = UserEntity.generatePassword(
        user.password
      );
      this._passwordSalt = passwordSalt;
      this._passwordHash = passwordHash;
    } else {
      this.id = user.id ?? crypto.randomUUID();
      this._passwordSalt = user.passwordSalt;
      this._passwordHash = user.passwordHash;
    }
  }

  static fromObject(user: UserModel): UserEntity {
    return new UserEntity(user);
  }

  public static generatePassword(
    password: string
  ): Pick<AuthUser, 'passwordSalt' | 'passwordHash'> {
    const passwordSalt = crypto.randomBytes(32).toString('hex');
    const passwordHash = crypto
      .pbkdf2Sync(password, passwordSalt, 10000, 64, 'sha512')
      .toString('hex');
    return {
      passwordSalt,
      passwordHash,
    };
  }

  public updatePassword(password: string): UserEntity {
    const { passwordSalt, passwordHash } =
      UserEntity.generatePassword(password);
    this._passwordSalt = passwordSalt;
    this._passwordHash = passwordHash;
    return this;
  }

  public validatePassword(password: string): boolean {
    const checkHash = crypto
      .pbkdf2Sync(password, this._passwordSalt, 10000, 64, 'sha512')
      .toString('hex');
    return this._passwordHash === checkHash;
  }

  public getInfo(): User {
    const { id, email, fullName, avatarSrc } = this;
    return { id, email, fullName, avatarSrc };
  }

  public toPOJO(): Record<string, unknown> {
    const { id, email, fullName, _passwordHash, avatarSrc } = this;
    return { id, email, fullName, _passwordHash, avatarSrc };
  }
}
