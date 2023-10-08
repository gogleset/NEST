import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}
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
  async getMessages(@Param('id') id: string) {
    // 하나 검색한 result
    const msg = await this.messageService.findOne(id);

    if (!msg) {
      throw new NotFoundException('message does not exist!');
    }
    return this.messageService.findOne(id);
  }
}
