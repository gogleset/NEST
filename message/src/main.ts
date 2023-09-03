import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 파이프를 전역으로 사용하게 설정
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
