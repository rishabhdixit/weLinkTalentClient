import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as candidateJobsAppliedAction from '../actions/candidate-jobs-applied.action';

@Injectable()
export class CandidateJobsAppliedEffects {

	@Effect()
	getCandidateJobApplications$ = this.actions
		.ofType(candidateJobsAppliedAction.ActionTypes.LOAD)
		.map((action: candidateJobsAppliedAction.CandidateJobsAppliedLoadAction) => action.payload)
		.switchMap((queryObject) => this.profileService.getCandidateJobsApplied(queryObject.user, queryObject.page)
			.map((res) => new candidateJobsAppliedAction.CandidateJobsAppliedLoadSuccessAction(res))
			.catch(() => Observable.of(new candidateJobsAppliedAction.CandidateJobsAppliedLoadFailAction('')))
		);

	constructor(
		private actions: Actions,
		private profileService: ProfileService) {
	}
}
