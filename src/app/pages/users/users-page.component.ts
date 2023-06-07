import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/services/users/types/users.types";
import {UsersService} from "../../shared/services/users/services/users.service";

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
