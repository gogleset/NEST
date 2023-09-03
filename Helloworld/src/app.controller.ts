import { Controller, Get } from '@nestjs/common';
// 데코레이터라 부르며 해당 파일이 수행하는 역할을 지정해주는 역할(자바의 어노테이션 개념)
// root url 의 값을 파라미터로 설정가능
@Controller()
// @Controller("/api") // /api/asd 같은 경로를 감싸줄수 있음

// 컨트롤러 역할을 수행 (router)
export class AppController {
  // get 요청
  @Get('/asd')
  getHello() {
    return 'asd';
  }
  // url 설정은 함수 안에서 설정가능하다. get요청의 path 루트를 설정하는게 가능 여기서는 (/"hello")
  @Get('/hello')
  getHelloWorld() {
    return 'getHello';
  }
}
