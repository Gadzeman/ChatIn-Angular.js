import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.scss'],
})
export class CreateChatComponent {
  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}

  public chatName: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  public createChat() {
    const { userId } = this.authService.getAccessTokenPayload();

    this.chatService
      .createChat({ name: this.chatName.value, owner: userId })
      .subscribe({ next: () => {}, error: () => {} });
  }
}
