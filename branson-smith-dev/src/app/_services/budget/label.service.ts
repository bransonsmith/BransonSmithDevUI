import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from './category.service';

export class LabelDto {
  id: string;
  name: string;
  autokeys: string;
  categoryid: string;
}

export class FilledOutLabelDto {
  id: string;
  name: string;
  autokeys: string;
  category: CategoryDto;
}

export class LabelUpdateDto {
  name: string;
  categoryid: string;
  autokeys: string;
}

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/labels';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  createLabel(newLabel): Observable<LabelDto> {
    return this.http.post<LabelDto>(this.url, newLabel, this.httpOptions);
  }

  getLabels(): Observable<LabelDto[]> {
    return this.http.get<LabelDto[]>(this.url + '/');
  }

  getFilledOutLabels(): Observable<FilledOutLabelDto[]> {
    return this.http.get<FilledOutLabelDto[]>(this.url + '/budget');
  }

  updateLabel(label: LabelDto): Observable<LabelDto> {
    const noIdField: LabelUpdateDto = {
      name: label.name,
      categoryid: label.categoryid,
      autokeys: label.autokeys
    };
    return this.http.put<LabelDto>(this.url + '/' + label.id, noIdField, this.httpOptions);
  }

  deleteLabel(label): Observable<LabelDto> {
    return this.http.delete<LabelDto>(this.url + '/' + label.id, this.httpOptions);
  }
}
