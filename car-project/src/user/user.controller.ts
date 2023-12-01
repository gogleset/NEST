import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user-dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  createUser(@Body() body: CreateUserDTO) {
    this.userService.create(body.email, body.password);
    console.log('User created ' + body);
  }
}
