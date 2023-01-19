import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems = [
    {
      name: 'Home',
      router: 'home',
    },
    {
      name: 'Chats',
      router: 'chats',
    },
    {
      name: 'Users',
      router: 'users',
    },
    {
      name: 'Settings',
      router: 'settings',
    },
  ]
}
