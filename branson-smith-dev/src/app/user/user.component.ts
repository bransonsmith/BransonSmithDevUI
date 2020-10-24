import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(target) {
    document.querySelectorAll('details').forEach(detail => {
      if (detail.getAttribute('id') !== target) {
          detail.removeAttribute('open');
      }
    });
  }
}
