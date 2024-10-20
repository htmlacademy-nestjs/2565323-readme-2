import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ChangePasswordDto,
  CreateUserDto,
  UserRdo,
} from '@project/shared-dtos';
import {
  INVALID_PASSWORD,
  USER_ALREADY_EXISTS,
  USER_NOT_FOUND,
} from './users.const';
import { UserEntity } from './entities/user.entity';
import { UsersMongoRepository } from './repositories/users.mongo-repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersMongoRepository: UsersMongoRepository) {}

  async create(user: CreateUserDto): Promise<UserRdo> {
    const oldUserEntity = await this.usersMongoRepository.findByEmail(
      user.email
    );
    if (oldUserEntity) {
      throw new ConflictException(USER_ALREADY_EXISTS);
    }

    const userEntity = await UserEntity.create(user);
    const savedUser = await this.usersMongoRepository.save(userEntity);
    return savedUser.getInfo() as UserRdo;
  }

  async getInfo(id: string): Promise<UserRdo> {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return userEntity.getInfo() as UserRdo;
  }

  async changePassword(
    id: string,
    { password, newPassword }: ChangePasswordDto
  ): Promise<UserRdo> {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    const isPasswordValid = await userEntity.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(INVALID_PASSWORD);
    }

    const updatedUserEntity = await userEntity.updatePassword(newPassword);
    return updatedUserEntity.getInfo() as UserRdo;
  }
}
