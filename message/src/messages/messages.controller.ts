import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;

  constructor() {
    // 마찬가지로 의존성 주입
    this.messageService = new MessagesService();
  }
  @Get()
  listOfMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    // 우리가 메세지를 받아오는 타입을 CreatemessageDto에 지정했으므로 body에 있는 content값으로 가져와야함
    this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
