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
import { JobService } from '../services/job.service';
import * as fromRoot from '../reducers';
import * as jobAction from '../actions/jobs.action';

@Injectable()
export class JobApplicationConceptGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>,
		private router: Router) {
	}

	hasSelectedJobInStore(): Observable<boolean> {
		return this.store.select(fromRoot.getSelectedJob)
			.map(job => !!job)
			.take(1);
	}

	hasSelectedJob(): Observable<boolean> {
		return this.hasSelectedJobInStore()
			.switchMap(inStore => {
				if (inStore) {
					return of(inStore);
				}

				this.router.navigate(['jobs']);
				return of(false);
			});
	}

	canActivate(): Observable<boolean> {
		return this.hasSelectedJob();
	}
}
