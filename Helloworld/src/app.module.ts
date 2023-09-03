import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// 모듈의 역할은 컨트롤러를 마무리하는 역할을 수행한다. 그렇기 때문에 모듈을 반드시 생성해 주어야 한다.
// 모듈을 만들기 위해서는 클래스의 형태로 모듈을 선언해줘야 한다.
@Module({
  // 컨트롤러 넣어주면 모듈화 가능
  controllers: [AppController],
})
export class AppModule {}
