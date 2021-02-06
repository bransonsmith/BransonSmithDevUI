import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discgolf-home',
  templateUrl: './discgolf-home.component.html',
  styleUrls: ['./discgolf-home.component.css']
})
export class DiscgolfHomeComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  createNewRound() {
    this.route.navigateByUrl('discgolf/new-round');
  }

}
