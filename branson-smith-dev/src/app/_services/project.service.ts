import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectDto } from '../portfolio-project-preview/portfolio-project-preview.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/projects';

  constructor(
    private http: HttpClient
  ) { }

  getProjects(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(this.url + '/');
  }
}
