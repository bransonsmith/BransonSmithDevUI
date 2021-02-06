import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseDto, CourseService } from 'src/app/_services/discgolf/course.service';
import { PlayerDto, PlayerService } from 'src/app/_services/discgolf/player.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    private courseService: CourseService,
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
      this.courseService.getCourses().subscribe(cs => this.courses = cs);
    });
  }

  submitForm() {
    let courseId = '0';
    if (this.roundForm.value.roundCourse && this.roundForm.value.roundCourse !== '') {
      courseId = this.courses.find(c => c.name === this.roundForm.value.roundCourse).id;
    }
    console.log(this.roundForm.value.roundCourse);
    console.log(courseId);
  }

  addPlayer() {
    this.playerService.createPlayer({ name: this.newPlayerForm.value.newPlayerName }).subscribe(
      p => { this.players.push({ id: p.id, name: p.name, selected: true }); }
    );
  }

  selectPlayer(player) {
    player.selected = !player.selected;
  }

}
