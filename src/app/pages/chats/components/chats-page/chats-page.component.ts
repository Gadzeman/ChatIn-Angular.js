import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateChatComponent } from '../create-chat/create-chat.component';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private chatService: ChatService,
    private socket: Socket
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {}

  public createChat() {
    const dialogRef = this.dialog.open(CreateChatComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
