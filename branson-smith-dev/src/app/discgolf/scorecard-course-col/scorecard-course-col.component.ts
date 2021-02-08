import { Component, Input, OnInit } from '@angular/core';
import { HoleDto } from 'src/app/_services/discgolf/hole.service';

@Component({
  selector: 'app-scorecard-course-col',
  templateUrl: './scorecard-course-col.component.html',
  styleUrls: ['./scorecard-course-col.component.css']
})
export class ScorecardCourseColComponent implements OnInit {

  @Input() holes: HoleDto[];

  constructor() { }

  ngOnInit() {
  }

}
