import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.scss'],
})
export class CreateChatComponent {
  constructor() {}

  public chatName: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  public createChat() {
    console.log(this.chatName.value);
  }
}
