import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LogIn } from '../models/login.model';

@Component({
	selector: 'app-login',
	template: `
<div class="row">
    <div class="col-md-12">
        <app-linkedin-login></app-linkedin-login>
    </div>
</div>

<app-or-seperator></app-or-seperator>
<form #loginForm="ngForm" (ngSubmit)="signInButtonClick()">
    <div class="row">
        <div class="col-md-12">
            <div class="form-group">
                <label for="username">Email address</label>
                <input type="email" class="form-control" id="username" name="username" placeholder="Email address"
                 [(ngModel)]="loginInfo.username" required />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password"
                 [(ngModel)]="loginInfo.password" required />
            </div>

            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
            <div class="checkbox">
                <label>
                    <input type="checkbox">Remember me
                </label>
            </div>
        </div>
    </div>
</form>
`,
	styles: []
})
export class LoginComponent {

	@Output() signInButtonClicked = new EventEmitter<LogIn>();
	loginInfo: LogIn = new LogIn();
	constructor() {
	}

	signInButtonClick() {
		this.signInButtonClicked.emit(this.loginInfo);
	}
}
