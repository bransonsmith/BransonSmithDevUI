import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker-event-home',
  templateUrl: './poker-event-home.component.html',
  styleUrls: ['./poker-event-home.component.css']
})
export class PokerEventHomeComponent implements OnInit {

  players = [
    { name: 'Tubz "Eugene" Johnson', image: '../../../assets/Tubz.JPG'},
    { name: 'Branson "lil b big red" Smith', image: '../../../assets/Branson.PNG'},
    { name: 'Matt "On the Table" Sheu', image: '../../../assets/Sheu.PNG'},
    { name: 'Ian "I only bluff with AJs" Marshall', image: '../../../assets/Ian.PNG'},
    { name: 'Ryan "On the Juice" Webb', image: '../../../assets/Webb.PNG'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
