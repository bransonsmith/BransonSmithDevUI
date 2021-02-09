import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseDto, CourseService } from 'src/app/_services/discgolf/course.service';
import { PlayerHoleService } from 'src/app/_services/discgolf/player-hole.service';
import { PlayerRoundService } from 'src/app/_services/discgolf/player-round.service';
import { PlayerDto, PlayerService } from 'src/app/_services/discgolf/player.service';
import { FilledOutRoundDto, RoundService } from 'src/app/_services/discgolf/round.service';

export class SelectablePlayerDto {
  id: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-discgolf-round-add',
  templateUrl: './discgolf-round-add.component.html',
  styleUrls: ['./discgolf-round-add.component.css']
})
export class DiscgolfRoundAddComponent implements OnInit {

  roundForm;
  newPlayerForm;
  players: SelectablePlayerDto[];
  courses: CourseDto[];
  rounds: FilledOutRoundDto[];

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private courseService: CourseService,
    private roundService: RoundService,
    private playerRoundService: PlayerRoundService,
    private playerHoleService: PlayerHoleService,
    private router: Router,
  ) {
    this.roundForm = this.formBuilder.group({
      roundCourse: [''],
    });
    this.newPlayerForm = this.formBuilder.group({
      newPlayerName: ['', Validators.required]
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.playerService.getPlayers().subscribe(ps => {
      this.players =
        ps.map(
          p => {
            return { id: p.id, name: p.name, selected: false };
      });
      this.rounds = [];
      this.courseService.getCourses().subscribe(cs => {
        this.courses = cs;
        this.roundService.getRounds().subscribe(rs => {
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < rs.length; i++) {
            const r = rs[i];
            this.rounds.push({
                id: r.id,
                courseid: r.courseid,
                date: r.date,
                course: cs.find(c => c.id === r.courseid),
                holes: [],
                playerInfo: []
            });
          }
        });
      });
    });
  }

  submitForm() {
    let course = this.courses[0];
    if (this.roundForm.value.roundCourse && this.roundForm.value.roundCourse !== '') {
      course = this.courses.find(c => c.name === this.roundForm.value.roundCourse);
    }
    const courseId = course.id;
    const selectedPlayers = this.players.filter(p => p.selected);
    this.roundService.createFilledOutRound(courseId, selectedPlayers.map(p => p.id)).subscribe( r => {
      this.goToRound(r);
    });
  }

  addPlayer() {
    this.playerService.createPlayer({ name: this.newPlayerForm.value.newPlayerName }).subscribe(
      p => { this.players.push({ id: p.id, name: p.name, selected: true }); }
    );
  }

  selectPlayer(player) {
    player.selected = !player.selected;
  }

  getDateStr(date) {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2].split('T')[0];
    const hour = (parseInt(date.split('-')[2].split('T')[1].split(':')[0], 10) + 6).toString().padStart(2, '0');
    const minute = date.split('-')[2].split('T')[1].split(':')[1].split('.')[0];

    return `${month}/${day}/${year} ${hour}:${minute}`;
  }

  goToRound(round) {
    this.router.navigateByUrl('discgolf/rounds/' + round.id);
  }

  sortRounds() {
    this.rounds.sort( (a, b) => {
      const aY = parseInt(a.date.split('-')[0], 10);
      const aM = parseInt(a.date.split('-')[1], 10);
      const aD = parseInt(a.date.split('-')[2].split('T')[0], 10);
      const aH = parseInt(a.date.split('-')[2].split('T')[1].split(':')[0], 10);
      const am = parseInt(a.date.split('-')[2].split('T')[1].split(':')[1], 10);

      const bY = parseInt(b.date.split('-')[0], 10);
      const bM = parseInt(b.date.split('-')[1], 10);
      const bD = parseInt(b.date.split('-')[2].split('T')[0], 10);
      const bH = parseInt(b.date.split('-')[2].split('T')[1].split(':')[0], 10);
      const bm = parseInt(b.date.split('-')[2].split('T')[1].split(':')[1], 10);

      return (aY - bY) * 9000000 + (aM - bM) * 10000 + (aD - bD) * 40 + (aH - bH) + (am - bm) * .1;
    });
  }
}
