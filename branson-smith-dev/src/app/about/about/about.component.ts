import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  carouselIndex = 0;
  carouselImages = [
    { index: 0, path: '../../../assets/dev_piper.JPG'},
    { index: 1, path: '../../../assets/bsdevCool.PNG'},
    { index: 2, path: '../../../assets/Career.PNG'},
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
