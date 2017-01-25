import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, State } from '@ngrx/store';
import * as fromRoot from '../reducers';

@Injectable()
export class LoggedInGuard implements CanActivate {

	constructor(private store: Store<fromRoot.State>) {
	}

	canActivate() {
		return this.store.select(fromRoot.isLoggedIn)
			.map((res: boolean) => res);
	}
}

