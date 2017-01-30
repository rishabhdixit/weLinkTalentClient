import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';
import * as jobsAction from '../actions/jobs.action';

@Injectable()
export class JobEffects {

	@Effect()
	searchJobs$ = this.actions
		.ofType(jobsAction.ActionTypes.JOBS_LOAD)
		.map((action: jobsAction.JobsLoadAction) => action.payload)
		.switchMap((query) => this.jobService.search('')
			.map((res) => new jobsAction.JobsLoadSuccessAction(res))
			.catch(() => Observable.of(new jobsAction.JobsLoadFailAction('')))
		);

	constructor(private actions: Actions, private jobService: JobService) {
	}
}
