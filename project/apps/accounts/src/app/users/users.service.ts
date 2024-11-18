import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ChangePasswordDTO,
  CreateUserDTO,
  LoginUserDTO,
  UserRDO,
} from '@project/shared-dtos';

import {
  INVALID_PASSWORD,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
} from './users.const';
import { UserEntity } from './entities/user.entity';
import { UsersMongoRepository } from './repositories/users.mongo-repository';
import { NotifyService } from '../notify/notify.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersMongoRepository: UsersMongoRepository,
    private readonly notifyService: NotifyService
  ) {}

  async create(user: CreateUserDTO): Promise<UserRDO> {
    const { email, firstName, lastName } = user;

    const oldUserEntity = await this.usersMongoRepository.findByEmail(email);
    if (oldUserEntity) {
      throw new ConflictException(USER_ALREADY_EXISTS);
    }

    const userEntity = await UserEntity.create(user);
    const savedUser = await this.usersMongoRepository.save(userEntity);

    await this.notifyService.registerSubscriber({ email, firstName, lastName });

    return savedUser.getInfo() as UserRDO;
  }

  async getInfo(id: string): Promise<UserRDO> {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return userEntity.getInfo() as UserRDO;
  }

  async changePassword(
    id: string,
    { password, newPassword }: ChangePasswordDTO
  ): Promise<UserRDO> {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    const isPasswordValid = await userEntity.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(INVALID_PASSWORD);
    }

    const updatedUserEntity = await userEntity.updatePassword(newPassword);
    await this.usersMongoRepository.update(
      updatedUserEntity.id,
      updatedUserEntity
    );
    return updatedUserEntity.getInfo() as UserRDO;
  }

  async verify({ email, password }: LoginUserDTO): Promise<UserRDO> {
    const userEntity = await this.usersMongoRepository.findByEmail(email);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    const isPasswordValid = await userEntity.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(INVALID_PASSWORD);
    }

    return userEntity.getInfo() as UserRDO;
  }
}
