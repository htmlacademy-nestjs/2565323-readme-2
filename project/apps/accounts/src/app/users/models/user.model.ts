import { Document } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { AuthUser } from '@project/shared-types';

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
  public passwordSalt: string;

  @Prop({
    required: true,
  })
  public avatarSrc: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
