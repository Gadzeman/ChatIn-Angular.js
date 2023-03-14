import { Component } from '@angular/core';
import { ChatService } from "../../chat/services/chat.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(
    private chatService: ChatService,
  ) {}

  public message: string = '';

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
