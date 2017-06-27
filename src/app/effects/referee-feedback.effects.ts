import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { JobService } from '../services/job.service';
import { JobApplicationService } from '../services/job-application.service';
import { effects } from '@ngrx/effects/src/effects-subscription';

import { Job } from '../models/job.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as refereeFeedback from '../actions/referee-feedback.action';
import * as fromRoot from '../reducers';

@Injectable()
export class RefereeFeedbackEffects {

	@Effect({ dispatch: false })
	loadJob$: Observable<Action> = this.actions
		.ofType(refereeFeedback.ActionTypes.LOAD_JOB_APPLICATION_SUCCESS)
		.map((action: refereeFeedback.LoadJobApplicationSuccessAction) => action.payload)
		.switchMap((query) => this.jobService.get(query.job_id)
			.map((job: Job) => new refereeFeedback.LoadJobSuccessAction(job))
			.catch(() => Observable.of(new refereeFeedback.LoadJobFailAction('')))
		).do((action) => this.store.dispatch(action));

	submitRefereeFeedback$: Observable<Action> = this.actions
		.ofType(refereeFeedback.ActionTypes.SUBMIT_FEEDBACK)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId: state.login.user.id,
				applicationId: state.refereeFeedback.jobApplication.id,
				data: action.payload
			};
		})
		.switchMap((payload: any) => {
			const data = Object.assign({}, payload.data, { referee_id: payload.userId });

			return this.jobApplicationService.saveRefereeFeedback(payload.applicationId, data)
				.mergeMap((response) => {
					return Observable.from([
						new refereeFeedback.SubmitFeedbackSuccessAction(response),
						this.router.navigate['/thank-page'],
					]);
				});
		});

	constructor(private actions: Actions,
		private jobService: JobService,
		private jobApplicationService: JobApplicationService,
		private router: Router,
		private store: Store<fromRoot.State>) {
	}
}
