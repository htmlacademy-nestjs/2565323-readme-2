import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Subscriber } from '@project/shared-types';

const SUBSCRIBERS_COLLECTION_NAME = 'email-subscribers';

@Schema({
  collection: SUBSCRIBERS_COLLECTION_NAME,
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class EmailSubscriberModel extends Document implements Subscriber {
  @Prop({
    required: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public fullName: string;

  public id?: string;
}

export const EmailSubscriberSchema =
  SchemaFactory.createForClass(EmailSubscriberModel);

EmailSubscriberSchema.virtual('id').get(function () {
  return this._id.toString();
});
