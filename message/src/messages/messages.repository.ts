// import { CUSTOM_ROUTE_ARGS_METADATA } from '@nestjs/common/constants';
import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  // 하나의 값 가져오기
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content);
    return messages[id];
  }
  // 모든 값 가져오기
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  // message.json 생성
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    // id값을 세 자리 난수로 부여
    const id = Math.floor(Math.random() * 999);
    // 다음과 같은 객체 형태로 값을 생성
    messages[id] = { id, content };
    // 글을 작성
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
