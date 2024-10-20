import { BaseMongoRepository } from '@project/shared-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../entities/user.entity';
import { UserModel } from '../models/user.model';

export class UsersMongoRepository extends BaseMongoRepository<
  UserEntity,
  UserModel
> {
  constructor(@InjectModel(UserModel.name) userModel: Model<UserModel>) {
    super(userModel, UserEntity.fromObject);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
