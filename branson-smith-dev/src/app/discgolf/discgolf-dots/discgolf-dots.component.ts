import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discgolf-dots',
  templateUrl: './discgolf-dots.component.html',
  styleUrls: ['./discgolf-dots.component.css']
})
export class DiscgolfDotsComponent implements OnInit {

  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

}
