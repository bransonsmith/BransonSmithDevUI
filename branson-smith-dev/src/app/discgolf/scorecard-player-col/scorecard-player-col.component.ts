import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilledOutPlayerHoleDto, PlayerHoleService } from 'src/app/_services/discgolf/player-hole.service';
import { FilledOutRoundPlayerDto } from 'src/app/_services/discgolf/round.service';


@Component({
  selector: 'app-scorecard-player-col',
  templateUrl: './scorecard-player-col.component.html',
  styleUrls: ['./scorecard-player-col.component.css']
})
export class ScorecardPlayerColComponent implements OnInit {

  @Input() playerInfo: FilledOutRoundPlayerDto;
  editingHole = false;
  holeBeingEdited: FilledOutPlayerHoleDto;
  editHoleForm;

  constructor(
    private formBuilder: FormBuilder,
    private playerHoleService: PlayerHoleService,
  ) {
    this.editHoleForm = this.formBuilder.group({
      holeScore: [0],
      holeDots: [0],
      holeShots: ['']
    });
  }

  ngOnInit() {
    console.log(this.playerInfo);
    this.playerInfo.playerHoles.sort( (a, b) => {
      return a.hole.number - b.hole.number;
    });
  }

  getScoreString() {
    let score = 0;
    let par = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.playerInfo.playerHoles.length; i++) {
      const ph = this.playerInfo.playerHoles[i];
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

  getDotTotal() {
    let sum = 0;
    this.playerInfo.playerHoles.forEach(p => sum += p.dots);
    return sum;
  }

  editHole(hole) {
    this.editingHole = true;
    this.holeBeingEdited = hole;
  }

  stopEditing() {
    this.editingHole = false;
    this.holeBeingEdited = null;
  }

  inc(field) {
    if (field === 'score') {
      this.holeBeingEdited.score += 1;
    }
    if (field === 'dots') {
      this.holeBeingEdited.dots += 1;
    }
  }

  dec(field) {
    if (field === 'score') {
      this.holeBeingEdited.score -= 1;
    }
    if (field === 'dots') {
      this.holeBeingEdited.dots -= 1;
    }
  }

  saveEditForm() {
    let shotValue = this.editHoleForm.value.holeShots;
    if (!shotValue || shotValue === '') {
      shotValue = this.holeBeingEdited.shots;
    }
    if (!shotValue) {
      shotValue = '';
    }
    this.playerHoleService.updatePlayerHole({
      id: this.holeBeingEdited.id,
      playerroundid: this.holeBeingEdited.playerroundid,
      holeid: this.holeBeingEdited.holeid,
      score: this.holeBeingEdited.score,
      dots: this.holeBeingEdited.dots,
      shots: shotValue
    }).subscribe( ph => {
      const newFilledPH = {
        id: this.holeBeingEdited.id,
        playerroundid: this.holeBeingEdited.playerroundid,
        holeid: this.holeBeingEdited.holeid,
        hole: this.holeBeingEdited.hole,
        score: ph.score,
        dots: ph.dots,
        shots: shotValue,
      };
      this.playerInfo.playerHoles.splice(this.playerInfo.playerHoles.findIndex(h => h.holeid === ph.holeid), 1);
      this.playerInfo.playerHoles.push(newFilledPH);
      this.playerInfo.playerHoles.sort( (a, b) => {
        return a.hole.number - b.hole.number;
      });
      this.editingHole = false;
      this.holeBeingEdited = null;
    });
  }
}
