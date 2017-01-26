import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import { LogIn } from '../models/login.model';

import * as loginAction from '../actions/login.action';
import * as profileAction from '../actions/profile.action';
import * as fromRoot from '../reducers';


@Component({
	selector: 'app-login-page',
	template: `
	 <div class="container">
		<div class="container-fluid">
				<br>
				<br>
				<div class="row">
						<div class="col-md-4">
						</div>

						<div class="col-md-4">
							<div class="row">
								<div class="col-md-12">
										<app-linkedin-login (profile)="linkedinProfile($event)"></app-linkedin-login>
								</div>
							</div>
							<app-login (signInButtonClicked)="onSignIn($event)"></app-login>
						</div>

						<div class="col-md-4">
						</div>
				</div>
		</div>
	</div>
	`,
	styles: []
})
export class LoginPageComponent {

	constructor(private store: Store<fromRoot.State>) {
	}

	onSignIn(login: LogIn) {
		this.store.dispatch(new loginAction.LoginAction({ login }));
	}

	linkedinProfile(profile: any) {
		this.store.dispatch(new profileAction.ProfileLinkedinSuccessAction(profile));
	}

}
