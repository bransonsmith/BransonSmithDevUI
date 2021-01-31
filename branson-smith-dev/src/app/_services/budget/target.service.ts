import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class TargetDto {
  id: string;
  categoryid: string;
  month: string;
  amount: number;
}
export class TargetUpdateDto {
  categoryid: string;
  month: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TargetService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/targets';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createTarget(newTarget): Observable<TargetDto> {
    return this.http.post<TargetDto>(this.url, newTarget, this.httpOptions);
  }

  getTargets(): Observable<TargetDto[]> {
    return this.http.get<TargetDto[]>(this.url + '/');
  }

  updateTarget(target): Observable<TargetDto> {
    const noIdField: TargetUpdateDto = {
      amount: target.amount,
      categoryid: target.categoryid,
      month: target.month
    };
    return this.http.put<TargetDto>(this.url + '/' + target.id, noIdField, this.httpOptions);
  }

  deleteTarget(target): Observable<TargetDto> {
    return this.http.delete<TargetDto>(this.url + '/' + target.id, this.httpOptions);
  }
}
