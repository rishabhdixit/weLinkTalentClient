import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as jobsAppliedAction from '../actions/jobs-applied.action';

@Injectable()
export class JobsAppliedEffects {

	@Effect()
	getCandidateJobApplications$ = this.actions
		.ofType(jobsAppliedAction.ActionTypes.LOAD)
		.map((action: jobsAppliedAction.JobsAppliedLoadAction) => action.payload)
		.switchMap((queryObject) => this.profileService.getCandidateJobsApplied(queryObject.user, queryObject.page)
			.map((res) => new jobsAppliedAction.JobsAppliedLoadSuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.JobsAppliedLoadFailAction('')))
		);

	constructor(
		private actions: Actions,
		private profileService: ProfileService) {
	}
}
