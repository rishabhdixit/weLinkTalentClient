import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Login } from '../models/login.model';

import * as loginAction from '../actions/login.action';
import * as profileAction from '../actions/profile.action';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-login-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	 <div class="container">
		<div class="container-fluid">
		<br><br>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-12">
							<app-linkedin-login (profile)="linkedinProfile($event)"></app-linkedin-login>
						</div>
					</div>
					<app-login [loginFail]="loginFail | async" (signInButtonClicked)="onSignIn($event)"></app-login>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
	</div>
	`,
	styles: []
})
export class LoginPageComponent {
	loginFail: Observable<boolean>;

	constructor(private store: Store<fromRoot.State>) {
		this.loginFail = this.store.select(fromRoot.isLoggedFail);
	}

	onSignIn(login: Login) {
		this.store.dispatch(new loginAction.LoginAction(login));
	}

	linkedinProfile(profile: any) {
		this.store.dispatch(new profileAction.ProfileLinkedInAction(profile));
	}
}
