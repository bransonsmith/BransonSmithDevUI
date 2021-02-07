import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseDto } from './course.service';
import { HoleDto } from './hole.service';
import { PlayerHoleDto } from './player-hole.service';
import { PlayerRoundDto } from './player-round.service';


export class RoundDto {
  id: string;
  courseid: string;
  date: string;
}

export class RoundUpdateDto {
  courseid: string;
  date: string;
}

export class FilledOutRoundDto {
    id: string;
    courseid: string;
    date: string;
    course: CourseDto;
    holes: HoleDto[];
    playerInfo: FilledOutRoundPlayerDto[];
}

export class FilledOutRoundPlayerDto {
  id: string;
  name: string;
  playerRound: PlayerRoundDto;
  playerHoles: PlayerHoleDto[];
}

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfrounds';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createRound(newRound): Observable<RoundDto> {
    return this.http.post<RoundDto>(this.url, newRound, this.httpOptions);
  }

  getRounds(): Observable<RoundDto[]> {
    return this.http.get<RoundDto[]>(this.url + '/');
  }

  getRound(roundId): Observable<RoundDto> {
    return this.http.get<RoundDto>(this.url + '/' + roundId);
  }

  getRoundsForCourse(courseId): Observable<RoundDto[]> {
    return this.http.get<RoundDto[]>(this.url + '/course/' + courseId);
  }

  getFilledOutRound(roundId): Observable<FilledOutRoundDto> {
    return this.http.get<FilledOutRoundDto>(this.url + '/round-data/' + roundId);
  }

  createFilledOutRound(courseid, playerids): Observable<FilledOutRoundDto> {
    const createBody = { courseid, playerids };
    return this.http.post<FilledOutRoundDto>(this.url + '/round-data/', createBody, this.httpOptions);
  }

  updateRound(round): Observable<RoundDto> {
    const noIdField: RoundUpdateDto = {
      courseid: round.courseid,
      date: round.date
    };
    return this.http.put<RoundDto>(this.url + '/' + round.id, noIdField, this.httpOptions);
  }

  deleteRound(round): Observable<RoundDto> {
    return this.http.delete<RoundDto>(this.url + '/' + round.id, this.httpOptions);
  }
}

