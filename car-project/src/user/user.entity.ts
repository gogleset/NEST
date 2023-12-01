// 설치해준 파일에서 아래 메소드들을 호출
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Entity 셋팅
@Entity()
export class User {
  @PrimaryGeneratedColumn() // pk지정
  id: number;

  @Column() // 각 컬럼들
  email: string;

  @Column()
  password: string;
}
