import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isMenuActive: boolean = false;
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
      name: 'Settings',
      router: 'settings',
    },
    {
      name: 'Users',
      router: 'users',
    }
  ]

  menu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
