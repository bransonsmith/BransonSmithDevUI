import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(this.url + '/');
  }

  postUser(newUser: CreateUserDto): Observable<UserDto> {
    return this.http.post<UserDto>(this.url, newUser, this.httpOptions);
  }

  updateUser(user): Observable<UserDto> {
    return this.http.put<UserDto>(this.url + '/' + user.id, user, this.httpOptions);
  }

  incClick(id, field) {
    return this.http.put<UserDto>(this.url + '/' + id + '/inc' + field, {}, this.httpOptions);
  }
}
