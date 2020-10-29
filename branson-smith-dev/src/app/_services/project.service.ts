import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ProjectDto {
  id: string;
  title: string;
  codelink: string;
  examplelink: string;
  text: string;
  image: string;
  codeclicks: number;
  exampleclicks: number;
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/projects';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(this.url + '/');
  }

  postProject(newProject): Observable<ProjectDto> {
    return this.http.post<ProjectDto>(this.url, newProject, this.httpOptions);
  }

  updateProject(project): Observable<ProjectDto> {
    return this.http.put<ProjectDto>(this.url + '/' + project.id, project, this.httpOptions);
  }

  incClick(id, field) {
    return this.http.put<ProjectDto>(this.url + '/' + id + '/inc' + field, {}, this.httpOptions);
  }
}
