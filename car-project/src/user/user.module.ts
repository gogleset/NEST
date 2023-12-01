import { Module } from '@nestjs/common';
// TypeOrmModule사용하기 위해 import
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { User } from './user.entity';

@Module({
  // import에 설정후 배열안에 사용할 Entity 셋팅해준다.
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
