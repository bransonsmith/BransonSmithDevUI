import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-meta-column',
  templateUrl: './portfolio-meta-column.component.html',
  styleUrls: ['./portfolio-meta-column.component.css']
})
export class PortfolioMetaColumnComponent implements OnInit {

  @Input() tags;

  constructor() { }

  ngOnInit() {
  }

}
