import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromRoot from '../reducers';
import * as userAction from '../actions/user.action';
import { UserService } from '../services/user.service';

@Injectable()
export class UserExistsGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>, private userService: UserService, private router: Router) {
	}

	hasUser(id: string): Observable<boolean> {
		return this.hasUserInApi(id);
	}

	hasUserInApi(id: string): Observable<boolean> {
		return this.userService.getUserById(id)
			.map((data) => new userAction.UserLoadSuccessAction(data))
			.do((action: userAction.UserLoadSuccessAction) => this.store.dispatch(action))
			.map((user) => !!user)
			.catch(() => {
				this.router.navigate(['applicants']);
				return of(false);
			});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		return this.hasUser(route.params['userId']);
	}
}
