import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      title: 'Career',
      link: 'https://ihsmarkit.com/products/wso-software.html',
      code: ''
    },
    {
      title: 'Age of Empires Team Builder',
      link: '',
      code: ''
    },
    {
      title: 'Budget Tool',
      link: 'budget-demo',
      code: ''
    },
    {
      title: 'Poker Tracker',
      link: 'poker',
      code: ''
    },
    {
      title: 'Side Stuff',
      link: 'all-projects',
      code: ''
    }
  ];

  tags = [
    { scheme: 1, text: 'Front End' },
    { scheme: 2, text: 'Back End' },
    { scheme: 3, text: 'Dev Ops' },
    { scheme: 4, text: 'Mobile' },
    { scheme: 5, text: 'Non-Web' }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  goTo(loc) {
    this.router.navigateByUrl(loc);
  }
}
