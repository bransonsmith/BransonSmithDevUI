import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoleDto } from 'src/app/_services/discgolf/hole.service';
import { FilledOutRoundDto, RoundDto, RoundService } from 'src/app/_services/discgolf/round.service';

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
  playerHoles: DiscGolfPlayerHole[];
}

@Component({
  selector: 'app-discgolf-round',
  templateUrl: './discgolf-round.component.html',
  styleUrls: ['./discgolf-round.component.css']
})
export class DiscgolfRoundComponent implements OnInit {

  round: FilledOutRoundDto;

  constructor(
    private roundService: RoundService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p =>
      this.roundService.getFilledOutRound(p.get('id')).subscribe(r => {
        r.holes.sort( (a, b) => a.number - b.number );
        this.round = r;
    }));
  }

  getDateStr(date) {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2].split('T')[0];
    const hour = (parseInt(date.split('-')[2].split('T')[1].split(':')[0], 10) + 6).toString().padStart(2, '0');
    const minute = date.split('-')[2].split('T')[1].split(':')[1].split('.')[0];

    return `${month}/${day}/${year} ${hour}:${minute}`;
  }

}
