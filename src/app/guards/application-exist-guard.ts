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
import * as jobAppliedAction from '../actions/jobs-applied.action';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class ApplicationExistsGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>, private profileService: ProfileService, private router: Router) {
	}

	hasJobApplied(id: string): Observable<boolean> {
		return this.hasJobAppliedInApi(id);
	}

	hasJobAppliedInApi(id: string): Observable<boolean> {
		return this.profileService.getCandidateJobAppliedId(id)
			.map((data) => new jobAppliedAction.ApplicationByIdLoadSuccessAction(data))
			.do((action: jobAppliedAction.ApplicationByIdLoadSuccessAction) => this.store.dispatch(action))
			.map((candidateJobApplied) => !!candidateJobApplied)
			.catch(() => {
				this.router.navigate(['applicants']);
				return of(false);
			});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		return this.hasJobApplied(route.params['id']);
	}
}
