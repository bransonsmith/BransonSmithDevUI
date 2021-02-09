import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discgolf-nav',
  templateUrl: './discgolf-nav.component.html',
  styleUrls: ['./discgolf-nav.component.css']
})
export class DiscgolfNavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTo(dest) {
    this.router.navigateByUrl('/discgolf' + dest);
  }

}
