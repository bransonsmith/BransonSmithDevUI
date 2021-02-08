import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  promptDelete = false;

  constructor(
    private roundService: RoundService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p =>
      this.roundService.getFilledOutRound(p.get('id')).subscribe(r => {
        r.holes.sort( (a, b) => a.number - b.number );
        this.round = r;
        console.log(r);
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

  getScoreString(player) {
    let score = 0;
    let par = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < player.playerHoles.length; i++) {
      const ph = player.playerHoles[i];
      score += ph.score;
      if (ph.score > 0) {
        par += ph.hole.par;
      }
    }
    const diff = score - par;
    if (diff < 0) {
      return '-' + diff.toString();
    }
    return '+' + diff.toString();
  }

  getDotTotal(player) {
    let sum = 0;
    player.playerHoles.forEach(p => sum += p.dots);
    return sum;
  }

  startDelete() {
    this.promptDelete = true;
  }
  cancelDelete() {
    this.promptDelete = false;
  }
  confirmDelete() {
    this.roundService.deleteRoundData(this.round);
    this.router.navigateByUrl('discgolf/rounds');
  }
}
