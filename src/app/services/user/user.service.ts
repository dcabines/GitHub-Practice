import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      catchError(() => of([{ id: '1', name: 'Example', email: 'example@example.com' }] as User[]))
    );
  }

  public find(id: string): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`).pipe(
      catchError(() => of({ id, name: 'Example', email: 'example@example.com' } as User))
    );
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
