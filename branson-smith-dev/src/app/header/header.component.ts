import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../_services/login.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('container', { static: false }) container;
  @ViewChild('expandButton', { static: false }) expandButton;
  isMenuExpanded = false;
  tokenCookie;
  usernameCookie;

  menuOptions = [
    { text: 'My Work', target: 'portfolio' },
    { text: 'About Me', target: 'about' },
    { text: 'Contact', target: 'contact', accented: true },
    { text: 'Playground', target: 'playground' },
  ];

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private userService: UserService,
    private loginService: LoginService
  ) {
    document.addEventListener('click', this.clickHandler.bind(this));
  }

  ngOnInit() {
    if (this.cookieService.check('bsdev_token')) {
      this.tokenCookie = this.cookieService.get('bsdev_token');
      this.userService.getCurrentUser().subscribe(user => {
        if (user !== null) {
          this.tokenCookie = this.cookieService.get('bsdev_token');
          this.usernameCookie = this.cookieService.get('bsdev_username');
        }
      });
    }
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

  logout() {
    this.loginService.logout();
    window.location.reload();
  }
}
