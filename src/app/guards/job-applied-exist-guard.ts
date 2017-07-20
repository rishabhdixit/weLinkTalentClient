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
export class JobAppliedExistsGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>, private profileService: ProfileService, private router: Router) {
	}

	hasJobAppliedJobInStore(id: string): Observable<boolean> {
		return this.store.select(fromRoot.getJobsApplied)
		.map(entities => !!entities[id])
		.take(1);
	}

	hasJobApplied(id: string): Observable<boolean> {
		return this.hasJobAppliedJobInStore(id)
		.switchMap(inStore => {
			if (inStore) {
				return of(inStore);
			}
			return this.hasJobAppliedInApi(id);
		});
	}

	hasJobAppliedInApi(id: string): Observable<boolean> {
		return this.profileService.getCandidateJobAppliedId(id)
		.map((data) => new jobAppliedAction.JobsAppliedLoadDetailAction(data))
		.do((action: jobAppliedAction.JobsAppliedLoadDetailAction) => this.store.dispatch(action))
		.map((candidateJobApplied) => !!candidateJobApplied)
		.catch(() => {
			this.router.navigate(['home']);
			return of(false);
		});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new jobAppliedAction.JobsAppliedSelectAction(route.params['id']));
		return this.hasJobApplied(route.params['id']);
	}
}
