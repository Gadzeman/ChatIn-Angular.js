import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
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
