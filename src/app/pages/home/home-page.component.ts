import {Component, OnInit} from '@angular/core';
import { MessageService } from "../../shared/services/chat/message.service";
import {Message} from "../../shared/classes/chat/message.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(
    private chatService: MessageService,
  ) {}

  public message: string = '';
  public messages: Message[] = [];

  ngOnInit() {
    this.chatService.startWatch();
    this.chatService.$messages.subscribe(messages => {
      this.messages = messages;
    })
    this.messages = this.chatService.getMessages();
  }

  public createMessage(e: Event) {
    e.preventDefault();
    this.chatService.createMessage({
      chatId: null,
      userId: 51,
      text: this.message,
    }).subscribe({
      next: () => {
        this.message = '';
        const chatEl = document.getElementById('chat_messages');
        chatEl.scrollTop = chatEl.scrollHeight;
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
