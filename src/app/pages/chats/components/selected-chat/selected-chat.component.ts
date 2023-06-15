import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chat } from '../../../../shared/classes/chat/chat.interface';

@Component({
  templateUrl: 'selected-chat.component.html',
  selector: 'app-selected-chat',
  styleUrls: ['selected-chat.component.scss'],
})
export class SelectedChatComponent implements OnChanges {
  @Input() chat: Chat;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chat']) {
    }
  }
}
