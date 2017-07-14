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
import * as candidateJobAppliedAction from '../actions/candidate-jobs-applied.action';
import {ProfileService} from '../services/profile.service';

@Injectable()
export class CandidateJobAppliedExistsGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>, private profileService: ProfileService, private router: Router) {
	}

	hasCandidateJobAppliedJobInStore(id: string): Observable<boolean> {
		return this.store.select(fromRoot.getCandidateJobsApplied)
		.map(entities => !!entities[id])
		.take(1);
	}

	hasCandidateJobApplied(id: string): Observable<boolean> {
		return this.hasCandidateJobAppliedJobInStore(id)
		.switchMap(inStore => {
			if (inStore) {
				return of(inStore);
			}
			return this.hasCandidateJobAppliedInApi(id);
		});
	}

	hasCandidateJobAppliedInApi(id: string): Observable<boolean> {
		return this.profileService.getCandidateJobAppliedId(id)
		.map((data) => new candidateJobAppliedAction.CandidateJobsAppliedLoadDetailAction(data))
		.do((action: candidateJobAppliedAction.CandidateJobsAppliedLoadDetailAction) => this.store.dispatch(action))
		.map((candidateJobApplied) => !!candidateJobApplied)
		.catch(() => {
			this.router.navigate(['home']);
			return of(false);
		});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new candidateJobAppliedAction.CandidateJobsAppliedSelectAction(route.params['id']));
		return this.hasCandidateJobApplied(route.params['id']);
	}
}
