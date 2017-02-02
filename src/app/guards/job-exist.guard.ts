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
			.map(entities => {
				this.store.dispatch(new jobAction.JobsSelectAction(id));
				return !!entities[id];
			})
			.take(1);
	}

	hasJob(id: string): Observable<boolean> {
		return this.hasJobInStore(id)
			.switchMap(inStore => {
				if (inStore) {
					return of(inStore);
				}
				this.router.navigate(['jobs']);
				return of(false);
			});
	}

	hasJobInApi(id: string): Observable<boolean> {
		/** TODO : trigger this if API is Ready **/
		return this.jobService.get(id)
			.map((data) => {
				if (data) {
					this.store.dispatch(new jobAction.JobsLoadSuccessAction([data]));
					this.store.dispatch(new jobAction.JobsSelectAction(id));
					return of(true);
				}
				this.router.navigate(['notfound page']);
				return of(false);
			})
			.catch(() => of(false));

	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		return this.hasJob(route.params['id']);
	}
}
