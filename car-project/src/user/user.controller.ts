import { Controller, Param, Query } from '@nestjs/common';
import { Post, Body, Get, Patch } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user-dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user-dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}
  // 생성하기
  @Post('/signup')
  createUser(@Body() body: CreateUserDTO) {
    this.userService.create(body.email, body.password);
    console.log('User created ' + body);
  }
  // 아이디 하나 찾기 param이 있다면 데코레이터 형식으로 받아올 수 있다.
  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }

  // 이메일로 찾기 query가 있다면 데코레이터 형식으로 받아올 수 있다.
  @Get()
  findEmail(@Query('email') email: string) {
    return this.userService.find(email);
  } // rule: post로 업데이트 할 수 있지만 업데이트할 때는 주로 patch로 업데이트를 한다.

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }
}
