import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chat } from '../../../../shared/classes/chat/chat.interface';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MessageService } from '../../../../shared/services/message/message.service';

@Component({
  templateUrl: 'selected-chat.component.html',
  selector: 'app-selected-chat',
  styleUrls: ['selected-chat.component.scss'],
})
export class SelectedChatComponent implements OnChanges {
  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  @Input() chat: Chat;

  public messageText: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chat']) {
    }
  }

  public sendMessage(e: Event) {
    e.preventDefault();
    const { userId } = this.authService.getAccessTokenPayload();
    this.messageService
      .sendMessage({
        text: this.messageText.value,
        chatId: this.chat.id,
        userId,
      })
      .subscribe((message) => {
        console.log(message);
      });
  }
}
