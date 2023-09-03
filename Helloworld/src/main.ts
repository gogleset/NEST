import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

//출력
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000);
}

// 실행하기
bootstrap();
