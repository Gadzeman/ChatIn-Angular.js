import { Component, Inject, Input, OnInit } from '@angular/core';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { User } from '../../../../shared/classes/user/user.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Chat } from '../../../../shared/classes/chat/chat.interface';

@Component({
  selector: 'app-update-chat-users',
  templateUrl: 'update-chat-users.component.html',
  styleUrls: ['update-chat-users.component.scss'],
})
export class UpdateChatUsersComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    @Inject(MAT_DIALOG_DATA)
    public data: { chat: Chat; option: 'add' | 'remove' },
    private dialogRef: MatDialogRef<UpdateChatUsersComponent>
  ) {}

  public users: User[] = [];
  public selectedUsers: User[] = [];

  ngOnInit(): void {
    this.chatService
      .getChatUsers(this.data.chat.id, this.data.option)
      .subscribe((users) => {
        this.users = users;
      });
  }

  public selectUser(selectedUser: User, event: any) {
    if (event.checked) {
      this.selectedUsers.push(selectedUser);
    } else {
      this.selectedUsers = this.selectedUsers.filter(
        (user) => user.id !== selectedUser.id
      );
    }
  }

  public updateChatUsers() {
    this.chatService
      .updateChatUsers(
        this.selectedUsers.map((user) => user.id),
        this.data.chat.id,
        this.data.option
      )
      .subscribe({
        next: (result) => {
          this.dialogRef.close();
        },
        error: (error) => {},
      });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
