import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-tags',
  templateUrl: './portfolio-tags.component.html',
  styleUrls: ['./portfolio-tags.component.css']
})
export class PortfolioTagsComponent implements OnInit {

  @Input() tags: string[];

  constructor() { }

  ngOnInit() {
  }

}
