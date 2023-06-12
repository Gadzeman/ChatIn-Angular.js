import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateChatComponent } from '../create-chat/create-chat.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {}

  public createChat() {
    const dialogRef = this.dialog.open(CreateChatComponent, {
      panelClass: 'create-chat',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
