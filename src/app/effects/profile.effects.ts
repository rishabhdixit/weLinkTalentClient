import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import * as profile from '../actions/profile.action';
import * as login from '../actions/login.action';

@Injectable()
export class ProfileEffects {

	@Effect()
	linkedinSuccess$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.PROFILE_LINKEDIN_SUCCESS)
		.map((action: profile.ProfileLinkedinSuccessAction) => {
			return new login.LoginSuccessAction({ email: action.payload.email });
		});


	constructor(private actions: Actions, private router: Router) {}
}
