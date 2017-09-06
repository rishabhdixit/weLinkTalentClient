import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { LoginService } from '../services/login.service';
import * as login from '../actions/login.action';
import * as fromRoot from '../reducers';

@Injectable()
export class LoggedInGuard implements CanActivate {

	constructor(private router: Router,
							private loginService: LoginService,
							private store: Store<fromRoot.State>) {
	}

	hasUserInApi(): Observable<boolean> {
		return this.loginService.retrieveUser()
			.map(userEntity => new login.LoginSuccessAction(userEntity))
			.do((action: login.LoginSuccessAction) => this.store.dispatch(action))
			.map(user => !!user)
			.catch(() => {
				this.router.navigate(['login']);
				return of(false);
			});
	}

	hasUserInStore(): Observable<boolean> {
		return this.store.select(fromRoot.getUserLoaded)
			.map(loaded => loaded)
			.take(1);
	}

	hasUser(): Observable<boolean> {
		return this.hasUserInStore()
			.switchMap(inStore => {
				if (inStore) {
					return of(inStore);
				}

				return this.hasUserInApi();
			});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		if (!this.loginService.isLoggedIn()) {
			this.router.navigate(['login']);
			return of(false);
		}

		return this.hasUser();
	}
}
