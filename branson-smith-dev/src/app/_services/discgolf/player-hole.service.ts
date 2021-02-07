import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CourseDto } from './course.service';
import { HoleDto, HoleService } from './hole.service';


export class PlayerHoleDto {
  id: string;
  playerroundid: string;
  holeid: string;
  score: number;
  dots: number;
  shots: number;
}

export class PlayerHoleUpdateDto {
  playerroundid: string;
  holeid: string;
  score: number;
  dots: number;
  shots: number;
}

export class FilledOutPlayerHoleDto {
  id: string;
  playerroundid: string;
  holeid: string;
  hole: HoleDto;
  score: number;
  dots: number;
  shots: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerHoleService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfplayerholes';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient,
    private holeService: HoleService,
  ) { }

  createPlayerHole(newPlayerHole): Observable<PlayerHoleDto> {
    return this.http.post<PlayerHoleDto>(this.url, newPlayerHole, this.httpOptions);
  }

  getPlayerHoles(): Observable<PlayerHoleDto[]> {
    return this.http.get<PlayerHoleDto[]>(this.url + '/');
  }

  getPlayerHole(playerholeId): Observable<PlayerHoleDto> {
    return this.http.get<PlayerHoleDto>(this.url + '/' + playerholeId);
  }

  getPlayerHolesForCourse(courseId): Observable<PlayerHoleDto[]> {
    return this.http.get<PlayerHoleDto[]>(this.url + '/course/' + courseId);
  }

  updatePlayerHole(playerhole): Observable<PlayerHoleDto> {
    const noIdField: PlayerHoleUpdateDto = {
      playerroundid: playerhole.playerroundid,
      holeid: playerhole.holeid,
      score: playerhole.score,
      dots: playerhole.dots,
      shots: playerhole.shots
    };
    return this.http.put<PlayerHoleDto>(this.url + '/' + playerhole.id, noIdField, this.httpOptions);
  }

  deletePlayerHole(playerhole): Observable<PlayerHoleDto> {
    return this.http.delete<PlayerHoleDto>(this.url + '/' + playerhole.id, this.httpOptions);
  }
}

