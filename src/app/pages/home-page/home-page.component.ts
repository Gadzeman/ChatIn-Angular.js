import {Component, OnInit} from '@angular/core';
import { MessageService } from "../../chat/services/message.service";
import {Message} from "../../chat/types/message.type";

@Component({
  selector: 'app-home-page',
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
    this.chatService.$message.subscribe(message => {
      this.messages.push(message);
    })
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
      },
      error: error => {
        console.log(error)
      }
    })
  }
}
