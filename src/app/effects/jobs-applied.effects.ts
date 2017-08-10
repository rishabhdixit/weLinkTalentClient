import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';
import { JobApplicationService } from '../services/job-application.service';

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
		.switchMap((queryObject) => this.profileService
			.getCandidateJobsApplied(queryObject.user, queryObject.page)
			.map((res) => new jobsAppliedAction.JobsAppliedLoadSuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.JobsAppliedLoadFailAction('')))
		);

	@Effect()
	applyJob = this.actions
		.ofType(jobsAppliedAction.ActionTypes.APPLICATION_APPLY)
		.map((action: jobsAppliedAction.ApplicationApplyAction) => action.payload)
		.switchMap((queryObject) => this.applicationService
			.applyJob(queryObject.applicationId, queryObject.body)
			.map((res) => new jobsAppliedAction.ApplicationApplySuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.ApplicationApplyFailAction('')))
		).do(() => this.router.navigate(['home']));

	@Effect()
	sendRequestFeedbackToRecruiter = this.actions
		.ofType(jobsAppliedAction.ActionTypes.APPLICATION_REQUEST_FEEDBACK_RECRUITER)
		.map((action: jobsAppliedAction.ApplicationRequestFeedbackRecruiterAction) => action.payload)
		.switchMap((queryObject) => this.applicationService
			.sendRequestFeedbackToRecruiter(queryObject.applicationId)
			.map((res) => new jobsAppliedAction.ApplicationRequestFeedbackRecruiterSuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.ApplicationRequestFeedbackRecruiterFailAction('')))
		).do(() => this.router.navigate(['home']));

	@Effect()
	sendRequestFeedbackToReferee = this.actions
		.ofType(jobsAppliedAction.ActionTypes.APPLICATION_REQUEST_FEEDBACK_REFEREE)
		.map((action: jobsAppliedAction.ApplicationRequestFeedbackRefereeAction) => action.payload)
		.switchMap((queryObject) => this.applicationService
			.sendRequestFeedbackToReferee(queryObject.applicationId)
			.map((res) => new jobsAppliedAction.ApplicationRequestFeedbackRefereeSuccessAction(res))
			.catch(() => Observable.of(new jobsAppliedAction.ApplicationRequestFeedbackRefereeFailAction('')))
		).do(() => this.router.navigate(['home']));

	constructor(
		private router: Router,
		private actions: Actions,
		private profileService: ProfileService,
		private applicationService: JobApplicationService) {
	}
}
