import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateChatComponent } from '../create-chat/create-chat.component';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { Chat } from '../../../../shared/classes/chat/chat.interface';
import { MessageService } from '../../../../shared/services/message/message.service';
import { Message } from '../../../../shared/classes/chat/message.interface';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private chatService: ChatService,
    private messageService: MessageService
  ) {}

  public chats: Chat[] = [];
  public selectedChat: Chat;

  public messages: Message[] = [];

  ngOnInit(): void {
    this.initData();

    this.subscribeData();
  }

  private initData() {
    this.chats = this.chatService.chats;
    this.messages = this.messageService.messages;
  }

  private subscribeData() {
    this.chatService.$chats.subscribe((chats) => {
      this.chats = chats;
    });

    this.messageService.$messages.subscribe((messages) => {
      this.messages = messages;
    });
  }

  public createChat() {
    this.dialog.open(CreateChatComponent);
  }

  public selectChat(chat: Chat) {
    this.selectedChat = chat;
  }
}
