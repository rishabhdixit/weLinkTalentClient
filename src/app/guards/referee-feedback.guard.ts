import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DecryptService } from '../services/decrypt.service';
import { LoginService } from '../services/login.service';
import * as refereeFeedback from '../actions/referee-feedback.action';
import * as login from '../actions/login.action';
import * as fromRoot from '../reducers';

@Injectable()
export class RefereeFeedbackGuard implements CanActivate {

	constructor(private router: Router,
		private decryptService: DecryptService,
		private loginService: LoginService,
		private store: Store<fromRoot.State>) {
	}

	hasApplicationFormInApi(token: string): Observable<boolean> {
		return this.decryptService.decryptFeedbackToken(token)
			.map(jobApplicationId => new refereeFeedback.DecryptTokenSuccessAction(jobApplicationId))
			.do((action: refereeFeedback.DecryptTokenSuccessAction) => this.store.dispatch(action))
			.map(jobApplicationId => !!jobApplicationId)
			.catch(() => {
				// TODO - need to redirected to Error Page.
				this.router.navigate(['/404'], {skipLocationChange: true});
				return of(false);
			});
	}

	hasApplicationForm(id: string): Observable<boolean> {
		return this.hasApplicationFormInApi(id);
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch({
			type: refereeFeedback.ActionTypes.SAVE_ENCRYPTED_TOKEN_SUCCESS,
			payload: {
				encryptedToken: route.queryParams['token']
			}
		});
		if (!this.loginService.isLoggedIn()) {
			this.store.dispatch(new login.RegisterRedirectUrlAction(`/referee-feedback?token=${route.queryParams['token']}`));
			this.router.navigate(['login']);
			return of(false);
		}
		return this.hasApplicationForm(route.queryParams['token']);
	}
}
