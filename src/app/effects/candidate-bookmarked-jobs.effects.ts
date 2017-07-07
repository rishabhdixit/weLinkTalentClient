import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as candidateBookmarkedJobsAction from '../actions/candidate-bookmarked-jobs.action';

@Injectable()
export class CandidateBookmarkedJobEffects {

	@Effect()
	loadBookmarkJobs$ = this.actions
		.ofType(candidateBookmarkedJobsAction.ActionTypes.LOAD)
		.map((action: candidateBookmarkedJobsAction.BookmarkJobsLoadAction) => action.payload)
		.switchMap((user) => this.jobService.getBookmarkJobs(user)
			.map((res) => new candidateBookmarkedJobsAction.BookmarkJobsLoadSuccessAction(res))
			.catch(() => Observable.of(new candidateBookmarkedJobsAction.BookmarkJobsLoadFailAction('')))
		);

	constructor(private actions: Actions,
							private jobService: JobService) {
	}
}
