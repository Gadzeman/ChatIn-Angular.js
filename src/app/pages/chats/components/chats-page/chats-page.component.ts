import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateChatComponent } from '../create-chat/create-chat.component';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { Chat } from '../../../../shared/classes/chat/chat.interface';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  constructor(public dialog: MatDialog, private chatService: ChatService) {}

  public chats: Chat[] = [];

  ngOnInit(): void {
    this.initData();
  }

  private initData() {}

  public createChat() {
    this.dialog.open(CreateChatComponent);
  }
}
