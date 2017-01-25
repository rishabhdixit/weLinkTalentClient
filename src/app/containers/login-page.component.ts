import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import { LogIn } from '../models/login.model';

import * as loginAction from '../actions/login.action';
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
		this.store.dispatch(new loginAction.LoginAction({ login: login }));
	}

}
