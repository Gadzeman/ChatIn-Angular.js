import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuActive: boolean = false;

  menu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
