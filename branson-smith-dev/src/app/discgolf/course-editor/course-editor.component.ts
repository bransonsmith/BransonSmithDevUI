import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseDto, CourseService } from 'src/app/_services/discgolf/course.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {

  newCourseForm;
  courses: CourseDto[];

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private route: Router
  ) {
    this.newCourseForm = this.formBuilder.group({
      newCourseName: ['', Validators.required],
      newCoursePar: [''],
      newCourseDistance: [''],
    });
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(c => this.courses = c);
  }

  addCourse() {
    this.courseService.createCourse({
      name: this.newCourseForm.value.newCourseName,
      par: this.newCourseForm.value.newCoursePar,
      distance: this.newCourseForm.value.newCourseDistance,
    }).subscribe(c => this.courses.push(c));
  }

  selectCourse(course) {
    this.route.navigateByUrl('discgolf/courses/' + course.id);
  }
}
