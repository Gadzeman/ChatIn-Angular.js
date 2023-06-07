import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/services/users/users.service";
import {User} from "../../shared/classes/user/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  constructor(
    private usersService: UsersService
  ) {}

  public users: User[] = [];

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
