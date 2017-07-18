import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as bookmarkedJobsActions from '../actions/bookmarked-jobs.action';

@Injectable()
export class BookmarkedJobEffects {

	@Effect()
	loadBookmarkJobs$ = this.actions
		.ofType(bookmarkedJobsActions.ActionTypes.LOAD)
		.map((action: bookmarkedJobsActions.BookmarkJobsLoadAction) => action.payload)
		.switchMap((user) => this.jobService.getBookmarkJobs(user)
			.map((res) => new bookmarkedJobsActions.BookmarkJobsLoadSuccessAction(res))
			.catch(() => Observable.of(new bookmarkedJobsActions.BookmarkJobsLoadFailAction('')))
		);

	constructor(private actions: Actions,
		private jobService: JobService) {
	}
}
