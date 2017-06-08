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
			.map((res) => new jobsAction.AddBookmarkSuccessAction(res))
			.catch(() => Observable.of(new jobsAction.AddBookmarkFailAction('')))
		);

	@Effect()
	removeBookmark$ = this.actions
		.ofType(jobsAction.ActionTypes.REMOVE_BOOKMARK)
		.map((action: jobsAction.RemoveBookmarkAction) => action.payload)
		.switchMap((data) => this.bookmarkService.removeBookmark(data)
			.map((res) => new jobsAction.RemoveBookmarkSuccessAction(res))
			.catch(() => Observable.of(new jobsAction.RemoveBookmarkFailAction('')))
		);

	constructor(private actions: Actions, private jobService: JobService, private bookmarkService: BookmarkService) {
	}
}
