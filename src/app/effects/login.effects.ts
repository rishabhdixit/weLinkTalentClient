import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import { LoginService } from '../services/login.service';
import * as login from '../actions/login.action';

@Injectable()
export class LogInEffects {

	/**
	 * Problem : When to redirect a link after log in using ngrx/store
	 * @see effects(sigIn)
	 * Solution: Create another effects that will handle the navigation
	 * @see effects(singInSuccess)
	 *
	 * @see : http://stackoverflow.com/questions/37633564/how-to-perform-multiple-related-operations-effects-actions-with-ngrx-effects
	 *
	 */

	@Effect()
	signIn$: Observable<Action> = this.actions
		.ofType(login.ActionTypes.LOGIN)
		.map((action: login.LoginAction) => action.payload)
		.switchMap((payload) =>
			this.logInService.signIn(payload)
				.map((data) => {
					localStorage.setItem('id_token', data.token);
					return new login.LoginSuccessAction(data.user);
				})
				.catch(() => Observable.of(new login.LoginFailAction('')))
		);

	@Effect({ dispatch: false })
	signInSuccess$: Observable<Action> = this.actions
		.ofType(login.ActionTypes.LOGIN_SUCCESS)
		.withLatestFrom(this.store, (action, state) => {
			return {
				nextUrl: state.login.redirectUrl,
				currentUser: state.login.user
			};
		})
		.do((payload: any) => {
			if (payload.nextUrl) {
				this.router.navigate([payload.nextUrl]);
			} else {
				if (this.logInService.isLoggedInAsAdmin(payload.currentUser)) {
					this.router.navigate(['/admin/home']);
				} else {
					this.router.navigate(['/profile']);
				}
			}
		});

	constructor(private actions: Actions,
		private logInService: LoginService,
		private router: Router,
		private store: Store<fromRoot.State>) { }
}
