import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserDto, UserService } from '../../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserDto;
  constructor(
    private cookieService: CookieService,
    private userService: UserService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    this.userService.getCurrentUser().subscribe(user => {
      if (user.email !== 'Failure') {
        this.user = user;
      } else {
        this.cookieService.delete('bsdev_token');
        this.user = null;
      }
    });
  }

  onClick(target) {
    document.querySelectorAll('details').forEach(detail => {
      if (detail.getAttribute('id') !== target) {
          detail.removeAttribute('open');
      }
    });
  }
}
