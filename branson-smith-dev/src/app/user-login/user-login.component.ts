import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { UserDto, UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm;
  validationText = '';
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      loginUsername: ['', Validators.required],
      loginPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  goTo(target) {
    this.router.navigateByUrl(target);
  }

  onSubmit() {
    this.validationText = '';
    if (!this.loginForm.valid) {
      if (this.loginForm.value.loginUsername.length === 0 ) {
        this.validationText += 'Username is required.';
      } else if (this.loginForm.value.loginPassword === 0) {
        this.validationText += 'Password is required.';
      }
    } else {
      const login = {
        username: this.loginForm.value.loginUsername,
        password: this.loginForm.value.loginPassword
      };
      this.loading = true;
      this.loginService.login(login).subscribe(response => {
        this.loading = false;
        this.router.navigateByUrl('home');
      });
    }
  }
}
