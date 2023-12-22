// create-user.dto.ts에서와 같이 해당 유효성 검사를 편하게 하기 위해 import해준다.
import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsOptional() // update할 때 해도 되고 안해도 되는 선택사항이라는 것을 선언해 줌
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
