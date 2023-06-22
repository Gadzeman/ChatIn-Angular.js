import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chat } from '../../../../shared/classes/chat/chat.interface';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { MessageService } from '../../../../shared/services/message/message.service';
import { Message } from '../../../../shared/classes/chat/message.interface';
import { Socket } from 'ngx-socket-io';
import { MatDialog } from '@angular/material/dialog';
import { UpdateChatUsersComponent } from '../update-chat-users/update-chat-users.component';

@Component({
  templateUrl: 'selected-chat.component.html',
  selector: 'app-selected-chat',
  styleUrls: ['selected-chat.component.scss'],
})
export class SelectedChatComponent implements OnChanges, OnInit {
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private socket: Socket,
    public dialog: MatDialog
  ) {}

  @Input() chat: Chat;

  public userId: number;

  public messages: Message[] = [];

  public messageText: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
    this.userId = this.authService.getAccessTokenPayload().userId;

    this.socket.on('messageCreated', (message: Message) => {
      this.messages.push(message);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chat'] && this.chat) {
      this.messageService.getMessages(this.chat.id).subscribe((messages) => {
        this.messages = messages;
      });
      this.socket.emit('joinChatRoom', this.chat);
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
        this.messageText.reset();
        this.messageService.emitMessageCreated(message, this.chat);
      });
  }

  public addUser() {
    this.dialog.open(UpdateChatUsersComponent, {
      data: { chat: this.chat, option: 'add' },
    });
  }

  public removeUser() {
    this.dialog.open(UpdateChatUsersComponent, {
      data: { chat: this.chat, option: 'remove' },
    });
  }
}
