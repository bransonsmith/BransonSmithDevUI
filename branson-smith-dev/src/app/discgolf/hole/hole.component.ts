import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HoleDto, HoleService } from 'src/app/_services/discgolf/hole.service';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.css']
})
export class HoleComponent implements OnInit {

  @Input() hole: HoleDto;
  holeForm;

  constructor(
    private formBuilder: FormBuilder,
    private holeService: HoleService
  ) {

    this.holeForm = this.formBuilder.group({
      holeNumber: [''],
      holePar: [''],
      holeDistance: [''],
    });
  }

  ngOnInit() {
    this.holeForm.value.holeNumber = this.hole.number;
    this.holeForm.value.holePar = this.hole.par;
    this.holeForm.value.holeDistance = this.hole.distance;
  }

  saveHole() {
    let num = this.holeForm.value.holeNumber;
    if (!num) { num = this.hole.number; }
    let par = this.holeForm.value.holePar;
    if (!par) { par = this.hole.par; }
    let distance = this.holeForm.value.holeDistance;
    if (!distance) { distance = this.hole.distance; }
    this.holeService.updateHole(
      {
        id: this.hole.id,
        number: num,
        par,
        distance,
        courseid: this.hole.courseid
      }
    ).subscribe(h => this.hole = h);
  }
}
