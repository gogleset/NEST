import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository; // 서비스는 자체만으로 동작할 수 없기 때문에 repository에 의존을 하라고 의존성 주입
  // 그냥 의존성 주입이 어떠한 형태로 되는지 과정을 보기 위한 코드이므로 대강보셈.
  // 실제로는 @Injection 데코레이터를 사용해서 의존성 주입을 할 예정. 내가 스터디 나갈때 소스 줄거임

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
