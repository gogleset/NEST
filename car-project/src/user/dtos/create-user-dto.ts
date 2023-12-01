import { IsEmail, IsString } from 'class-validator';

// pipe에서 판단할 타입지정
export class CreateUserDTO {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}
