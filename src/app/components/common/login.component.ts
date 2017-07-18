import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Login } from '../../models/login.model';

@Component({
	selector: 'app-login',
	template: `
	<app-or-seperator></app-or-seperator>
	<form #loginForm="ngForm" (ngSubmit)="signInButtonClick()">
		<div class="row">
			<div class="col-md-12">
				<div *ngIf="loginFail" class="alert alert-warning" role="alert" >
					Incorrect Email address or Password entered. Please try again.
				</div>
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
			</div>
		</div>
	</form>
`,
	styles: []
})
export class LoginComponent {
	@Input() loginFail: boolean;
	@Output() signInButtonClicked = new EventEmitter<Login>();
	loginInfo: Login = new Login();

	constructor() { }

	signInButtonClick() {
		this.signInButtonClicked.emit(this.loginInfo);
	}
}
