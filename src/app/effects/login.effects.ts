import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';

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

	constructor(private actions: Actions,
							private logInService: LoginService,
							private router: Router) {
	}

	/**
	 * Problem : When to redirect a link after log in using ngrx/store
	 * @see effects(sigIn)
	 * Solution: Create another effects that will handle the navigation
	 * @see effects(singInSuccess)
	 *
	 * @see : http://stackoverflow.com/questions/37633564/how-to-perform-multiple-related-operations-effects-actions-with-ngrx-effects
	 *
	 */

	/**
	 * TODO :1) save jwt-token in localstorage or in state
	 *      :2) change to switch map if service will call API
	 */
	/* tslint:disable */
	@Effect()
	sigIn: Observable<Action> = this.actions
		.ofType(login.ActionTypes.LOGIN)
		.map((action: login.LoginAction) => action.payload.login)
		.switchMap((payload)=>
			this.logInService.signIn(payload)
				.map((data)=> {
						data.email = payload.username;
						return new login.LoginSuccessAction(data);
				})
				.catch(()=> Observable.of(new login.LoginFailAction('')))
		);





	@Effect({ dispatch: false })
	singInSuccess: Observable<Action> = this.actions
		.ofType(login.ActionTypes.LOGIN_SUCCESS)
		.do(() => this.router.navigate(['/home']));
}
