import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PlayerRoundDto {
  id: string;
  playerid: string;
  roundid: string;
}

export class PlayerRoundUpdateDto {
  playerid: string;
  roundid: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerRoundService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfplayerrounds';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createPlayerRound(newPlayerRound): Observable<PlayerRoundDto> {
    return this.http.post<PlayerRoundDto>(this.url, newPlayerRound, this.httpOptions);
  }

  getPlayerRounds(): Observable<PlayerRoundDto[]> {
    return this.http.get<PlayerRoundDto[]>(this.url + '/');
  }

  getPlayerRound(playerroundId): Observable<PlayerRoundDto> {
    return this.http.get<PlayerRoundDto>(this.url + '/' + playerroundId);
  }

  updatePlayerRound(playerround): Observable<PlayerRoundDto> {
    const noIdField: PlayerRoundUpdateDto = {
      roundid: playerround.roundid,
      playerid: playerround.playerid,
    };
    return this.http.put<PlayerRoundDto>(this.url + '/' + playerround.id, noIdField, this.httpOptions);
  }

  deletePlayerRound(playerround): Observable<PlayerRoundDto> {
    return this.http.delete<PlayerRoundDto>(this.url + '/' + playerround.id, this.httpOptions);
  }
}

