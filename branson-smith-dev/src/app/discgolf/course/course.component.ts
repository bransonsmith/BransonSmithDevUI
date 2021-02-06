import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDto, CourseService } from 'src/app/_services/discgolf/course.service';
import { HoleDto, HoleService } from 'src/app/_services/discgolf/hole.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: CourseDto;
  holes: HoleDto[];
  courseForm;
  holeForm;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private holeService: HoleService
  ) {
    this.courseForm = this.formBuilder.group({
      courseName: [''],
      coursePar: [''],
      courseDistance: [''],
    });
    this.holeForm = this.formBuilder.group({
      holeNumber: [1],
      holePar: [3],
      holeDistance: [0],
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe( p =>
      this.courseService.getCourse(p.get('id')).subscribe(c => {
        this.course = c;
        this.courseForm.value.courseName = this.course.name;
        this.courseForm.value.coursePar = this.course.par;
        this.courseForm.value.courseDistance = this.course.distance;
        this.holeService.getHolesForCourse(this.course.id).subscribe(hs => {
          this.holes = hs;

          this.holeForm = this.formBuilder.group({
            holeNumber: [this.holes.length + 1],
            holePar: [3],
            holeDistance: [0],
          });
        });
      })
    );
  }

  addHole() {
    this.holeService.createHole(
      {
        number: this.holeForm.value.holeNumber,
        par: this.holeForm.value.holePar,
        distance: this.holeForm.value.holeDistance,
        courseid: this.course.id
      }
    ).subscribe(h => {
      this.holes.push(h);
      this.holes.sort( (a, b) => a.number - b.number );
      this.holeForm.value.holeNumber = this.holes.length + 1;
      this.holeForm.value.holePar = 3;
      this.holeForm.value.holeDistance = 0;
    });
  }
}
