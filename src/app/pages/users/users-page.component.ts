import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { User } from '../../shared/classes/user/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  constructor(private usersService: UserService) {}

  public users: User[] = [];

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}
