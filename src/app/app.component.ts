import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/services/chat/chat.service';
import { MessageService } from './shared/services/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.chatService.start();
    this.messageService.start();
  }
}
