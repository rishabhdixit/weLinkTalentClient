import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { JobService } from '../services/job.service';
import { BookmarkService } from '../services/bookmark.service';

import * as jobsAction from '../actions/jobs.action';

@Injectable()
export class JobEffects {

	@Effect()
	searchJobs$ = this.actions
		.ofType(jobsAction.ActionTypes.LOAD)
		.map((action: jobsAction.JobsLoadAction) => action.payload)
		.switchMap((query) => this.jobService.search(query)
			.map((res) => new jobsAction.JobsLoadSuccessAction(res))
			.catch(() => Observable.of(new jobsAction.JobsLoadFailAction('')))
		);

	@Effect()
	addBookmark$ = this.actions
		.ofType(jobsAction.ActionTypes.ADD_BOOKMARK)
		.map((action: jobsAction.AddBookmarkAction) => action.payload)
		.switchMap((data) => this.bookmarkService.addBookmark(data)
			.map((res) => new jobsAction.AddBookmarkSuccessAction(data))
			.catch(() => Observable.of(new jobsAction.AddBookmarkFailAction('')))
		);

	@Effect()
	removeBookmark$ = this.actions
		.ofType(jobsAction.ActionTypes.REMOVE_BOOKMARK)
		.map((action: jobsAction.RemoveBookmarkAction) => action.payload)
		.switchMap((data) => this.bookmarkService.removeBookmark(data)
			.map((res) => new jobsAction.RemoveBookmarkSuccessAction(data))
			.catch(() => Observable.of(new jobsAction.RemoveBookmarkFailAction('')))
		);

	@Effect()
	getJobStatus$ = this.actions
		.ofType(jobsAction.ActionTypes.GET_STATUS)
		.map((action: jobsAction.GetJobStatus) => action.payload)
		.switchMap((payload) => this.jobService.getStatus(payload.user, payload.jobId)
			.map((res) => new jobsAction.GetJobStatusSuccess({ 'data': res, 'selectedJobId': payload.jobId }))
			.catch(() => Observable.of(new jobsAction.GetJobStatusFail('')))
		);

	@Effect()
	jobCreation = this.actions
		.ofType(jobsAction.ActionTypes.JOB_CREATION)
		.map((action: jobsAction.JobCreationAction) => action.payload)
		.switchMap((data) => this.jobService.createJob(data)
			.map((res) => new jobsAction.JobCreationSuccessAction(data))
			.catch(() => Observable.of(new jobsAction.JobCreationFailAction('')))
		);

	constructor(private actions: Actions,
		private jobService: JobService,
		private bookmarkService: BookmarkService) {
	}
}
