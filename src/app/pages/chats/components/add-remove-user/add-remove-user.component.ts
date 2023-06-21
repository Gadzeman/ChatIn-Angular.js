import { Component, Inject, Input, OnInit } from '@angular/core';
import { ChatService } from '../../../../shared/services/chat/chat.service';
import { User } from '../../../../shared/classes/user/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Chat } from '../../../../shared/classes/chat/chat.interface';

@Component({
  selector: 'app-add-remove-user',
  templateUrl: 'add-remove-user.component.html',
  styleUrls: ['add-remove-user.component.scss'],
})
export class AddRemoveUserComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    @Inject(MAT_DIALOG_DATA)
    public data: { chat: Chat; option: 'add' | 'remove' }
  ) {}

  public users: User[] = [];

  ngOnInit(): void {
    this.chatService
      .getChatUsers(this.data.chat.id, this.data.option)
      .subscribe((users) => {
        this.users = users;
        console.log(this.users);
      });
  }
}
