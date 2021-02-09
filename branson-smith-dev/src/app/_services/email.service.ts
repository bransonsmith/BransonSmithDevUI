import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailsUrl = 'https://bransonsmithdev-api.herokuapp.com/api/emails';

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(fromEmail: string, message: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };

    // tslint:disable:quotemark
    // tslint:disable-next-line:object-literal-key-quotes
    const body =  { "fromEmail": fromEmail, "message": message };
    const url = this.emailsUrl + '/send';
    // console.log(body);
    return this.http.post<object>(url, body, httpOptions);
  }

}
