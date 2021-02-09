import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  wasSent = false;
  showValidation = false;
  links = [
    // {
    //   name: 'Email',
    //   username: 'BransonSmith22@gmail.com',
    //   link: '',
    //   image: 'gm-icon.png'
    // },
    {
      name: 'Twitter',
      username: 'https://twitter.com/BransonSmith22',
      link: '',
      image: 't-icon.png'
    },
    {
      name: 'StackOverflow',
      username: '',
      link: 'https://stackoverflow.com/users/story/11329158',
      image: 'so-icon.svg'
    },
    {
      name: 'LinkedIn',
      username: '',
      link: 'https://www.linkedin.com/in/branson-smith-011954136/',
      image: 'li-icon.png'
    },
    {
      name: 'GitHub',
      username: '',
      link: 'https://github.com/bransonsmith',
      image: 'gh-icon.png'
    },
  ];

  messageTxt = '';
  emailTxt = '';

  constructor(
    private router: Router,
    private emailService: EmailService,
  ) { }


  ngOnInit() {
    window.scroll(0, 0);
  }

  getImage(link) {
    return '../../../assets/' + link.image;
  }

  sent() {
    return this.wasSent;
  }

  send() {

    this.showValidationMessage();
    if ( !this.emailTxt || !this.messageTxt || this.messageTxt.length < 1 || this.emailTxt.length < 1) {
      this.showValidationMessage();
    } else {
      if (!this.wasSent) {
        this.emailService.sendEmail(this.emailTxt, this.messageTxt).subscribe();
        this.wasSent = true;
        window.scroll(0, 0);
      }
    }
  }

  validationIsShowing() {
    return this.showValidation;
  }
  showValidationMessage() {
    this.showValidation = true;
  }
  hideValidationMessage() {
    this.showValidation = false;
  }

  routeHome() {
    this.router.navigateByUrl('/home');
  }

}
