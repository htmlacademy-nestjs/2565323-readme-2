import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthUser } from '@project/shared-types';

@Schema()
export class UserModel extends Document implements AuthUser {
  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public fullName: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
  })
  public avatarSrc: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
