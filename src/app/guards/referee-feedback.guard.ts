import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { JobApplicationService } from '../services/job-application.service';
import { LoginService } from '../services/login.service';
import * as refereeFeedback from '../actions/referee-feedback.action';
import * as login from '../actions/login.action';
import * as fromRoot from '../reducers';

@Injectable()
export class RefereeFeedbackGuard implements CanActivate {

	constructor(private router: Router,
		private jobApplicationService: JobApplicationService,
		private loginService: LoginService,
		private store: Store<fromRoot.State>) {
	}

	hasApplicationFormInApi(id: string): Observable<boolean> {
		return this.jobApplicationService.loadJobApplication(id)
			.map(jobApplicationForm => new refereeFeedback.LoadJobApplicationSuccessAction(jobApplicationForm))
			.do((action: refereeFeedback.LoadJobApplicationSuccessAction) => this.store.dispatch(action))
			.map(user => !!user)
			.catch(() => {
				this.router.navigate(['']);
				return of(false);
			});
	}

	hasApplicationForm(id: string): Observable<boolean> {
		return this.hasApplicationFormInApi(id);
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		if (!this.loginService.isLoggedIn()) {
			this.store.dispatch(new login.RegisterRedirectUrlAction(`/referee-feedback/${route.params['application-form']}`));
			this.router.navigate(['login']);
			return of(false);
		}

		return this.hasApplicationForm(route.params['application-form']);
	}
}

