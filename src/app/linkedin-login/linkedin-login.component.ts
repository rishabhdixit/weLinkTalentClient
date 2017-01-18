import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-linkedin-login',
  template: `
    <button (click)='login()' class="btn btn-block btn-linkedin btn-social">
      <i class="fa fa-linkedin"></i>
      Sign in with LinkedIn
    </button>
  `,
  styleUrls: ['./linkedin-login.component.css']
})
export class LinkedinLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('https://platform.linkedin.com/in.js?async=true', () => {
      IN.init({
        api_key: '81xkask6b0vp2j',
        authorize: true
      });
    });
  }

  login() {
    IN.User.authorize(() => {

    });
  }

  logout() {
    IN.User.logout(() => {});
  }

}
