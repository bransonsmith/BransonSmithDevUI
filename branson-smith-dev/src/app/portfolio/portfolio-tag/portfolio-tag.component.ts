import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-tag',
  templateUrl: './portfolio-tag.component.html',
  styleUrls: ['./portfolio-tag.component.css']
})
export class PortfolioTagComponent implements OnInit {

  @Input() tag;
  enabled = true;

  constructor() { }

  ngOnInit() {
  }

  toggleEnabled() {
    this.enabled = !this.enabled;
  }
}
