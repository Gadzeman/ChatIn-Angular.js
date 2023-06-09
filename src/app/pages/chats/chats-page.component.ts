import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss'],
})
export class ChatsPageComponent implements OnInit {
  ngOnInit(): void {
    this.initData();
  }

  private initData() {}
}
