import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { JobService } from '../services/job.service';
import { JobApplicationService } from '../services/job-application.service';

import { Job } from '../models/job.model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as refereeFeedback from '../actions/referee-feedback.action';
import * as jobsAppliedAction from '../actions/jobs-applied.action';
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

	@Effect()
	submitRefereeFeedback$: Observable<Action> = this.actions
		.ofType(refereeFeedback.ActionTypes.SUBMIT_FEEDBACK)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId: state.login.user.id,
				applicationId: state.refereeFeedback.jobApplication.id,
				token: state.refereeFeedback.encryptedToken,
				data: action.payload
			};
		})
		.switchMap((payload: any) => {
			const data = Object.assign({}, payload.data, {
				referee_id: payload.userId,
				token: payload.token
			});
			return this.jobApplicationService.saveRefereeFeedback(payload.applicationId, data)
				.mergeMap((response) => {
					return Observable.from([
						new refereeFeedback.SubmitFeedbackSuccessAction(response),
					]);
				}).do(() => this.router.navigate(['/referee-thank-page']));
		});

	@Effect()
	decryptTokenSuccess$: Observable<Action> = this.actions
		.ofType(refereeFeedback.ActionTypes.DECRYPT_TOKEN_SUCCESS)
		.map((action: refereeFeedback.DecryptTokenSuccessAction) => action.payload)
		.switchMap((payload) => this.jobApplicationService.loadJobApplication(payload.data)
			.map((res) => new refereeFeedback.LoadJobApplicationSuccessAction(res))
		);

	@Effect()
	approvedRefereeFeedback = this.actions
		.ofType(jobsAppliedAction.ActionTypes.APPLICATION_APPROVE_FEEDBACK)
		.map((action: jobsAppliedAction.ApplicationApproveFeedbackAction) => action.payload)
		.switchMap((queryObject) => this.jobApplicationService
			.approveRefereeFeedback(queryObject.applicationId, queryObject.feedbackId, queryObject.body)
			.map((res) => new jobsAppliedAction.ApplicationApproveFeedbackSuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.ApplicationApproveFeedbackFailAction('')))
		).do(() => this.router.navigate(['/home']));

	constructor(private actions: Actions,
		private jobService: JobService,
		private jobApplicationService: JobApplicationService,
		private router: Router,
		private store: Store<fromRoot.State>) {
	}
}
