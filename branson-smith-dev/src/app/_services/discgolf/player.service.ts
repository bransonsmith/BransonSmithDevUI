import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PlayerDto {
  id: string;
  name: string;
}
export class PlayerUpdateDto {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/discgolfplayers';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createPlayer(newPlayer): Observable<PlayerDto> {
    return this.http.post<PlayerDto>(this.url, newPlayer, this.httpOptions);
  }

  getPlayers(): Observable<PlayerDto[]> {
    return this.http.get<PlayerDto[]>(this.url + '/');
  }

  updatePlayer(player): Observable<PlayerDto> {
    const noIdField: PlayerUpdateDto = {
      name: player.name
    };
    return this.http.put<PlayerDto>(this.url + '/' + player.id, noIdField, this.httpOptions);
  }

  deletePlayer(player): Observable<PlayerDto> {
    return this.http.delete<PlayerDto>(this.url + '/' + player.id, this.httpOptions);
  }
}
