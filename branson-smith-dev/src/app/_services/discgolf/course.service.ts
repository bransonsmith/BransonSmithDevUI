import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class CourseDto {
  id: string;
  name: string;
  par: number;
  distance: number;
}

export class CourseUpdateDto {
  name: string;
  par: number;
  distance: number;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfcourses';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createCourse(newCourse): Observable<CourseDto> {
    return this.http.post<CourseDto>(this.url, newCourse, this.httpOptions);
  }

  getCourses(): Observable<CourseDto[]> {
    return this.http.get<CourseDto[]>(this.url + '/');
  }

  getCourse(courseId): Observable<CourseDto> {
    return this.http.get<CourseDto>(this.url + '/' + courseId);
  }

  updateCourse(course): Observable<CourseDto> {
    const noIdField: CourseUpdateDto = {
      name: course.name,
      par: course.par,
      distance: course.distance
    };
    return this.http.put<CourseDto>(this.url + '/' + course.id, noIdField, this.httpOptions);
  }

  deleteCourse(course): Observable<CourseDto> {
    return this.http.delete<CourseDto>(this.url + '/' + course.id, this.httpOptions);
  }
}

