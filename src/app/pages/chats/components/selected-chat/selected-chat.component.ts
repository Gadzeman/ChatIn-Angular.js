import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chat } from '../../../../shared/classes/chat/chat.interface';
import { FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: 'selected-chat.component.html',
  selector: 'app-selected-chat',
  styleUrls: ['selected-chat.component.scss'],
})
export class SelectedChatComponent implements OnChanges {
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
  }
}
