import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user = new User();

  constructor(private router: Router, private userService: UserService) { }

  onSubmit() {
    this.userService
      .save(this.user)
      .toPromise()
      .then(user => this.goToUser(user.id));
  }

  gotoUserList() {
    this.router.navigate(['users']);
  }

  goToUser(id: string) {
    this.router.navigate(['users', id]);
  }
}
