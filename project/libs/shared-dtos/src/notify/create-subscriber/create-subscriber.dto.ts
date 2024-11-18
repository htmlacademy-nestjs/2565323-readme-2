import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateSubscriberDTO {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public firstName: string;

  @IsNotEmpty()
  public lastName: string;
}
