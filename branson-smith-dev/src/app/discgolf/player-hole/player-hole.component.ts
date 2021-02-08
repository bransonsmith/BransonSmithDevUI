import { Component, Input, OnInit } from '@angular/core';
import { FilledOutPlayerHoleDto } from 'src/app/_services/discgolf/player-hole.service';

@Component({
  selector: 'app-player-hole',
  templateUrl: './player-hole.component.html',
  styleUrls: ['./player-hole.component.css']
})
export class PlayerHoleComponent implements OnInit {

  @Input() hole: FilledOutPlayerHoleDto;

  constructor() { }

  ngOnInit() {
  }

  getScoreString() {
    if (this.hole.score === 0) {
      return '';
    }
    const diff = this.hole.score - this.hole.hole.par;
    if (diff > 0) {
      return `${this.hole.score} (+${diff})`;
    }
    return `${this.hole.score} (${diff})`;
  }

}
