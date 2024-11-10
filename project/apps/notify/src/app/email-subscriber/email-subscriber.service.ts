import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from '@project/shared-dtos';

import { EmailSubscriberMongoRepository } from './repositories/email-subscriber.mongo-repository';
import { EmailSubscriberEntity } from './entities/email-subscriber.entity';

@Injectable()
export class EmailSubscriberService {
  constructor(
    private readonly emailSubscriberRepository: EmailSubscriberMongoRepository
  ) {}

  public async addSubscriber(subscriber: CreateSubscriberDto) {
    const { email } = subscriber;
    const existsSubscriber = await this.emailSubscriberRepository.findByEmail(
      email
    );
    if (existsSubscriber) {
      return existsSubscriber;
    }
    return this.emailSubscriberRepository.save(
      EmailSubscriberEntity.fromObject(subscriber)
    );
  }
}
