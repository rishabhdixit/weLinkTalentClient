import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, State } from '@ngrx/store';

import * as fromRoot from '../reducers';

@Injectable()
export class LoggedInGuard implements CanActivate {

	constructor(private store: Store<fromRoot.State>, private router: Router) {
	}

	canActivate() {
		return this.store.select(fromRoot.isLoggedIn)
			.map((res: boolean) => {
				if (!res) {
					this.router.navigate(['login']);
				}

				return res;
			});
	}
}

