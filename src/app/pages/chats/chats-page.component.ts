import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  public chatsListActive: boolean = false;

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.displayChatsList();
  }

  private displayChatsList() {
    setTimeout(() => {
      this.chatsListActive = true;
    });
  }
}
