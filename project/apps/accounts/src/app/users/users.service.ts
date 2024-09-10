import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersMemoryRepository } from './repositories/users.memory-repository';
import { UserEntity } from './entities/user.entity';
import {
  UserChangePasswordRequest,
  UserRegisterRequest,
  UserRegisterResponse,
} from '@project/shared-dtos';

@Injectable()
export class UsersService {
  constructor(private readonly usersMemoryRepository: UsersMemoryRepository) {}

  async create(user: UserRegisterRequest): Promise<UserRegisterResponse> {
    const oldUserEntity = this.usersMemoryRepository.getByEmail(user.email);
    if (oldUserEntity) {
      throw new ConflictException(
        `User with email ${user.email} already exists`
      );
    }

    const { password, ...userWithoutPassword } = user;
    const userEntity = await new UserEntity(userWithoutPassword).setPassword(
      password
    );
    this.usersMemoryRepository.save(userEntity);
    return userEntity.getInfo();
  }

  async getInfo(id: string) {
    const userEntity = this.usersMemoryRepository.getById(id);
    if (!userEntity) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return userEntity.getInfo();
  }

  async changePassword(
    id: string,
    { password, newPassword }: UserChangePasswordRequest
  ) {
    const userEntity = this.usersMemoryRepository.getById(id);
    if (!userEntity) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const isPasswordValid = userEntity.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const updatedUserEntity = await userEntity.setPassword(newPassword);
    return updatedUserEntity.getInfo();
  }
}
