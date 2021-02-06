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

}
