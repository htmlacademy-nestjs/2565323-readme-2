import { Subscriber } from '@project/shared-types';
import { Entity } from '@project/shared-core';

export class EmailSubscriberEntity
  implements Subscriber, Entity<string, Subscriber>
{
  public id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public userId: string;

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }

  public populate({ id, email, firstName, lastName }: Subscriber): EmailSubscriberEntity {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;

    return this;
  }

  static fromObject(data: Subscriber): EmailSubscriberEntity {
    return new EmailSubscriberEntity().populate(data);
  }
}
