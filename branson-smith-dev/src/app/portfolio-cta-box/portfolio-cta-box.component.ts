import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-cta-box',
  templateUrl: './portfolio-cta-box.component.html',
  styleUrls: ['./portfolio-cta-box.component.css']
})
export class PortfolioCtaBoxComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() buttonText: string;
  @Input() altStyle: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(loc) {
    this.router.navigateByUrl(loc);
  }
}
