import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('container', { static: false }) container;
  @ViewChild('expandButton', { static: false }) expandButton;
  isMenuExpanded = false;

  menuOptions = [
    { text: 'My Work', target: 'portfolio' },
    { text: 'About Me', target: 'about' },
    { text: 'Contact', target: 'contact', accented: true },
    { text: 'Playground', target: 'playground' },
  ];

  constructor(
    private router: Router
  ) {
    document.addEventListener('click', this.clickHandler.bind(this));
  }

  ngOnInit() {
  }

  clickHandler(event: any) {
    if (!(this.container.nativeElement.contains(event.target) ||
        (this.expandButton === undefined || this.expandButton.nativeElement.contains(event.target)))) {
      this.isMenuExpanded = false;
    } else {
      this.isMenuExpanded = !this.isMenuExpanded;
    }
  }

  goToTarget(target) {
    this.router.navigateByUrl(target);
  }
}
