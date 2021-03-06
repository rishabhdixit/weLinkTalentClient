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
})
export class LinkedinLoginComponent implements OnInit {
	@Output() profile = new EventEmitter();

	ngOnInit() {
		$.getScript('https://platform.linkedin.com/in.js?async=true', () => {
			IN.init({
				api_key: '81zeopu62nl2eb',
				authorize: true
			});
		});
	}

	login() {
		IN.User.authorize(() => {
			const fields = [
				'id',
				'email-address',
				'first-name',
				'last-name',
				'headline',
				'specialties',
				'positions',
				'pictureUrl',
				'summary',
			].join(',');
			IN.API.Raw(`/people/~:(${fields})?format=json`).result((res) => {
				this.profile.emit(res);
			}).error((error) => {
				// Note: what instance does error happen?
				// TODO: Add component error view
			});
		});
	}

	logout() {
		IN.User.logout(() => {});
	}

}
