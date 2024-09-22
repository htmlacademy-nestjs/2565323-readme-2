import { BaseMongoRepository } from '@project/shared-core';
import { UserEntity } from '../entities/user.entity';
import { UserModel } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class UsersMongoRepository extends BaseMongoRepository<
  UserEntity,
  UserModel
> {
  constructor(@InjectModel(UserModel.name) blogUserModel: Model<UserModel>) {
    super(blogUserModel, UserEntity.fromObject);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
