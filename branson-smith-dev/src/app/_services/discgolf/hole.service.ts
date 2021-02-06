import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export class HoleDto {
  id: string;
  number: number;
  par: number;
  distance: number;
  courseid: string;
}

export class HoleUpdateDto {
  number: number;
  par: number;
  distance: number;
  courseid: string;
}

@Injectable({
  providedIn: 'root'
})
export class HoleService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfholes';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createHole(newHole): Observable<HoleDto> {
    return this.http.post<HoleDto>(this.url, newHole, this.httpOptions);
  }

  getHoles(): Observable<HoleDto[]> {
    return this.http.get<HoleDto[]>(this.url + '/');
  }

  getHole(holeId): Observable<HoleDto> {
    return this.http.get<HoleDto>(this.url + '/' + holeId);
  }

  getHolesForCourse(courseId): Observable<HoleDto[]> {
    return this.http.get<HoleDto[]>(this.url + '/course/' + courseId);
  }

  updateHole(hole): Observable<HoleDto> {
    const noIdField: HoleUpdateDto = {
      number: hole.number,
      par: hole.par,
      distance: hole.distance,
      courseid: hole.courseid
    };
    return this.http.put<HoleDto>(this.url + '/' + hole.id, noIdField, this.httpOptions);
  }

  deleteHole(hole): Observable<HoleDto> {
    return this.http.delete<HoleDto>(this.url + '/' + hole.id, this.httpOptions);
  }
}

