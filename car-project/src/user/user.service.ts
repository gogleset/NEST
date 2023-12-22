import { Injectable } from '@nestjs/common';
// 타입orm 설정
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }
  // 하나 값 찾기
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  // 이메일 값 찾기
  find(email: string) {
    return this.repo.findOne({ where: { email } });
  }
  // id값으로 찾고 해당 엔터티를 이용해서 업데이트 하기 위한 함수
  async update(id: number, attrs: Partial<User>) {
    // 먼저 찾는다
    const user = await this.findOne(id); // id를 검색했는데 user가 없으면 에러로 던져준다
    if (!user) {
      throw new Error('User not found');
    }
    // Object.assign함수로 해당 user에 User의 정보를 플러스 해준다.
    // Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣은 후대상 객체를 반환한다.
    Object.assign(user, attrs);
    console.log(Object.assign(user, attrs));
    // user에 붙여넣어 반환한 객체를 save()로 저장해주어 업데이트를 시켜준다.
    return this.repo.save(user);
  }
}
