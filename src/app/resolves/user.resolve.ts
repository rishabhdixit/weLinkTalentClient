import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import * as fromRoot from '../reducers';
import * as login from '../actions/login.action';

@Injectable()
export class UserResolve implements Resolve<boolean> {
	constructor(
		private store: Store<fromRoot.State>,
		private loginService: LoginService
	) { }


	hasUserInApi(): Observable<boolean> {
		return this.loginService.retrieveUser()
			.map(userEntity => new login.LoginFillUserAction(userEntity))
			.do((action: login.LoginFillUserAction) => this.store.dispatch(action))
			.map(user => {
				return true;
			});
	}

	resolve(route: ActivatedRouteSnapshot) {
		if (this.loginService.isLoggedIn()) {
			return this.hasUserInApi();
		}
		return Observable.of(true);
	}
}
