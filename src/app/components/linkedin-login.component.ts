import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
	selector: 'app-linkedin-login',
	template: `
		<button (click)='login()' class="btn btn-block btn-linkedin btn-social">
			<i class="fa fa-linkedin"></i>
			Sign in with LinkedIn
		</button>
	`,
	styleUrls: []
})
export class LinkedinLoginComponent implements OnInit {
	@Output() profile = new EventEmitter();

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
			IN.API.Raw('/people/~:(id,email-address,first-name,last-name,headline,specialties,positions,picture-url)?format=json').result((res) => {
				this.profile.emit(res);
			}).error((error) => {
				// Note: what instance does error happen?
				// TODO: Add component error view
				console.log(error);
			});
		});
	}

	logout() {
		IN.User.logout(() => {});
	}

}
