import { Component, Input, OnInit } from '@angular/core';
import { DiscGolfRoundPlayer } from '../discgolf-round/discgolf-round.component';

@Component({
  selector: 'app-discgolf-player-summary',
  templateUrl: './discgolf-player-summary.component.html',
  styleUrls: ['./discgolf-player-summary.component.css']
})
export class DiscgolfPlayerSummaryComponent implements OnInit {

  @Input() player: DiscGolfRoundPlayer;

  constructor() { }

  ngOnInit() {
  }

  getScoreString() {
    let score = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.player.playerHoles.length; i++) {
      const ph = this.player.playerHoles[i];
      score += ph.score;
    }
    if (score < 0) {
      return '-' + score.toString();
    }
    return '+' + score.toString();
  }

}
