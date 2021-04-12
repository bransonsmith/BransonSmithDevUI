import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  @Input() title: string;
  @Input() timeBeforeLoad: number;
  loaded = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.load();
    }, this.timeBeforeLoad);
  }

  load() {
    this.loaded = true;
  }
}
