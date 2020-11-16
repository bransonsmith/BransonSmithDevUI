import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CategoryDto {
  id: string;
  name: string;
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/categories';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  createCategory(newCategory): Observable<CategoryDto> {
    return this.http.post<CategoryDto>(this.url, newCategory, this.httpOptions);
  }

  getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.url + '/');
  }
}
