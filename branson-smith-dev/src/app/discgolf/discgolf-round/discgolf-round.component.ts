import { Component, Input, OnInit } from '@angular/core';
import { HoleDto } from 'src/app/_services/discgolf/hole.service';

export class DiscGolfPlayerHole {
  id: string;
  playerid: string;
  holeid: string;
  roundid: string;
  score: number;
  dots: number;
}

export class FilledOutGolfPlayerHole {
  id: string;
  holeid: string;
  hole: HoleDto;
  roundid: string;
  score: number;
  dots: number;
  shots: string;
}


export class DiscGolfRoundPlayer {
  id: string;
  name: string;
  score: number;
  dots: number;
  playerHoles: DiscGolfPlayerHole[];
}

@Component({
  selector: 'app-discgolf-round',
  templateUrl: './discgolf-round.component.html',
  styleUrls: ['./discgolf-round.component.css']
})
export class DiscgolfRoundComponent implements OnInit {

  players = [
    { name: 'Branson', id: '1' },
    { name: 'AJ',      id: '2' },
    { name: 'Alex',    id: '3' },
    { name: 'Nick',    id: '4' },
  ];
  holes = [
    { number: 1, par: 3, distance: 250, id: '1', courseId: '1' },
    { number: 2, par: 3, distance: 250, id: '2', courseId: '1' },
    { number: 3, par: 3, distance: 250, id: '3', courseId: '1' },
    { number: 4, par: 3, distance: 250, id: '4', courseId: '1' },
    { number: 5, par: 3, distance: 250, id: '5', courseId: '1' },
    { number: 6, par: 3, distance: 250, id: '6', courseId: '1' },
    { number: 7, par: 3, distance: 250, id: '7', courseId: '1' },
  ];
  roundPlayers: DiscGolfRoundPlayer[];

  constructor() { }

  ngOnInit() {
  }

}
