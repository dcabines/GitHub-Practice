import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(userService: UserService) {
    this.users$ = userService.findAll();
  }
}
