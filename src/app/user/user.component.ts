import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user$: Observable<User>;

  constructor(route: ActivatedRoute, userService: UserService) {
    this.user$ = route.params.pipe(
      map(params => params.id),
      switchMap(id => userService.find(id))
    );
  }
}
