import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/login';
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

  login(login): Observable<any> {
    return this.http.post<any>(this.url, login, this.httpOptions);
  }

  logout() {
    this.cookieService.deleteAll();
  }
}
