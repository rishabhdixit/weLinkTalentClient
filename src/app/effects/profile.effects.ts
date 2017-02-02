import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { LoginService } from '../services/login.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as profile from '../actions/profile.action';
import * as login from '../actions/login.action';

import { createProfile } from '../reducers/profile.reducer';

@Injectable()
export class ProfileEffects {

	@Effect()
	linkedinSuccess$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.PROFILE_LINKEDIN_SUCCESS)
		.map((action: profile.ProfileLinkedinSuccessAction) => createProfile(action.payload))
		.switchMap(payload => {
			return this.loginService.linkedinSignIn(payload)
				.do((data) => console.log('Linked in sign-in success!'))
				.map((data) => {
					localStorage.setItem('id_token', data.token);
					return new login.LoginSuccessAction('');
				})
				.catch(() => Observable.of(new profile.ProfileLinkedinFailAction(false)));
		});

	@Effect({ dispatch: false })
	logout$ = this.actions
		.ofType(profile.ActionTypes.PROFILE_LOGOUT)
		.do(() => {
			localStorage.removeItem('id_token');
			localStorage.removeItem('user');
		})
		.do(() => this.router.navigate(['login']));

	constructor(private actions: Actions, private loginService: LoginService, private router: Router) {}
}
