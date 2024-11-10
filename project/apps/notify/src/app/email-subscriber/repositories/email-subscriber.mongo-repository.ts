import { BaseMongoRepository } from '@project/shared-core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { EmailSubscriberEntity } from '../entities/email-subscriber.entity';
import { EmailSubscriberModel } from '../models/email-subscriber.model';

export class EmailSubscriberMongoRepository extends BaseMongoRepository<
  EmailSubscriberEntity,
  EmailSubscriberModel
> {
  constructor(
    @InjectModel(EmailSubscriberModel.name)
    subscriberModel: Model<EmailSubscriberModel>
  ) {
    super(subscriberModel, EmailSubscriberEntity.fromObject);
  }

  public async findByEmail(
    email: string
  ): Promise<EmailSubscriberEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
