import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export class UserDto {
  id: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getCurrentUser(): Observable<UserDto> {
    if (this.cookieService.check('bsdev_token')) {
      const token = this.cookieService.get('bsdev_token');
      return this.http.get<UserDto>(this.url + `/token/${token}`).pipe(
        catchError(this.handleError<UserDto>('getCurrentUser', { email: 'Failure', username: '', id: '' }))
      );
    } else {
      this.cookieService.deleteAll();
      return of({ email: 'Failure', username: '', id: '' });
    }
  }

  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.url + '/');
  }

  postUser(newUser: CreateUserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.url, newUser, this.httpOptions).pipe(
      catchError(this.handleError<UserDto>('createUser', { email: 'Failure', username: '', id: '' }))
    );
  }

  updateUser(user): Observable<UserDto> {
    return this.http.put<UserDto>(this.url + '/' + user.id, user, this.httpOptions);
  }

  incClick(id, field) {
    return this.http.put<UserDto>(this.url + '/' + id + '/inc' + field, {}, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // tslint:disable-next-line:no-string-literal
      result['id'] = error.error;
      return of(result as T);
    };
  }
}
