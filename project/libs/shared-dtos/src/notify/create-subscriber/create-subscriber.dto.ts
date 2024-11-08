import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSubscriberDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public fullName: string;
}
