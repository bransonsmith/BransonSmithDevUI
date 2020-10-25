import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../_services/login.service';
import { CreateUserDto, UserDto, UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  userForm;
  validationText = '';
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.minLength(2)],
      email: ['', Validators.minLength(5)],
      password: ['', Validators.minLength(6)],
      confirmpassword: ['', Validators.minLength(6)],
      acceptcookies: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
  }

  onSubmit(userData) {
    this.validationText = '';
    if (!this.userForm.valid) {
      if (this.userForm.value.username.length < 2) {
        this.validationText += 'Username must be at least 2 characters long.';
      } else if (this.userForm.value.email.length < 5) {
        this.validationText += 'Email must be at least 5 characters long.';
      } else if (!this.userForm.value.email.includes('@')) {
        this.validationText += 'Email must include an @ domain.';
      } else if (this.userForm.value.password.length < 6) {
        this.validationText += 'Password must be at least 6 characters long.';
      } else if (this.userForm.value.password !== this.userForm.value.confirmpassword) {
        this.validationText += 'Password and Confirm Password fields must match.';
      } else if (!this.userForm.value.acceptcookies) {
        this.validationText += 'You must accept the cookie policy to make an account.';
      }
    } else {
      const newUser: CreateUserDto = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        password: this.userForm.value.password
      };
      this.loading = true;
      this.userService.postUser(newUser).subscribe( userResponse => {
        if (userResponse.email === 'Failure') {
          this.loading = false;
          this.validationText = userResponse.id;
          return;
        }
        const login = {
          username: newUser.username,
          password: newUser.password
        };
        this.loginService.login(login).subscribe(response => {
          this.cookieService.set('bsdev_token', response.token);
          this.cookieService.set('bsdev_username', response.user.username);
          window.location.reload();
        });
      });
    }

  }
}
