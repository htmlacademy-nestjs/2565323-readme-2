import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ChangePasswordDto,
  ChangePasswordRdo,
  CreateUserDto,
  CreateUserRdo,
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

  async create(user: CreateUserDto): Promise<CreateUserRdo> {
    const oldUserEntity = this.usersMongoRepository.findByEmail(user.email);
    if (oldUserEntity) {
      throw new ConflictException(USER_ALREADY_EXISTS);
    }

    const { password, ...restUser } = user;
    const generatedPassword = UserEntity.generatePassword(password);
    const userEntity = new UserEntity({
      ...restUser,
      ...generatedPassword,
    });
    await this.usersMongoRepository.save(userEntity);
    return userEntity.getInfo() as CreateUserRdo;
  }

  async getInfo(id: string) {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return userEntity.getInfo();
  }

  async changePassword(
    id: string,
    { password, newPassword }: ChangePasswordDto
  ) {
    const userEntity = await this.usersMongoRepository.findById(id);
    if (!userEntity) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    const isPasswordValid = userEntity.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(INVALID_PASSWORD);
    }

    const updatedUserEntity = userEntity.updatePassword(newPassword);
    return updatedUserEntity.getInfo() as ChangePasswordRdo;
  }
}
