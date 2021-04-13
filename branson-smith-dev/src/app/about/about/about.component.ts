import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  carouselIndex = 0;
  carouselImages = [
    { index: 0, path: '../../../assets/beach.jpeg'},
    { index: 1, path: '../../../assets/dev_piper.JPG'},
    { index: 2, path: '../../../assets/kids.JPG'},
    { index: 3, path: '../../../assets/piper.JPG'},
    { index: 4, path: '../../../assets/graduation.JPG'},
  ];

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  decCarousel() {
    this.carouselIndex--;
    if (this.carouselIndex < 0) {
      this.carouselIndex = this.carouselImages.length - 1;
    }
  }
  incCarousel() {
    this.carouselIndex++;
    if (this.carouselIndex >= this.carouselImages.length) {
      this.carouselIndex = 0;
    }
  }
}
