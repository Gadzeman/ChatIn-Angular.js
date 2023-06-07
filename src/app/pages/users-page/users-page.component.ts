import {Component, OnInit} from '@angular/core';
import {User} from "../../users/types/users.types";
import {UsersService} from "../../users/services/users.service";

@Component({
  selector: 'app-users-page',
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
