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
export class JobExistsGuard implements CanActivate {
	constructor(private store: Store<fromRoot.State>,
		private jobService: JobService,
		private router: Router) {
	}

	hasJobInStore(id: string): Observable<boolean> {
		return this.store.select(fromRoot.getJobEntites)
			.map(entities => !!entities[id])
			.take(1);
	}

	hasJob(id: string): Observable<boolean> {
		return this.hasJobInStore(id)
			.switchMap(inStore => {
				if (inStore) {
					return of(inStore);
				}
				return this.hasJobInApi(id);
			});
	}

	hasJobInApi(id: string): Observable<boolean> {
		return this.jobService.get(id)
			.map((data) => new jobAction.JobsLoadDetailAction(data))
			.do((action: jobAction.JobsLoadDetailAction) => this.store.dispatch(action))
			.map((job) => !!job)
			.catch(() => {
				this.router.navigate(['notfound']);
				return of(false);
			});
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		this.store.dispatch(new jobAction.JobsSelectAction(route.params['id']));
		return this.hasJob(route.params['id']);
	}
}
