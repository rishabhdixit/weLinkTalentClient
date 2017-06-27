import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as refereeAction from '../actions/referee-feedback.action';
import { JobApplication } from '../models/job-application.model';
import { RefereeFeedback } from '../models/referee-feedback.model';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-referee-feedback-page',
	template: `
				<div class="container">
						<div class="container-fluid">
							<div	class="row" style="text-align: center;">
								<h2>Application for:</h2>
							</div>
							<div class="row">
								<div class="col-md-7" style="background: lightgray;">
									<app-referee-feedback-application-view
                   						[jobApplication]="jobApplicationForm$ | async "
										[job]="job$ | async"   >
										</app-referee-feedback-application-view>
								</div>
								<div class="col-md-5" style="float: right; background: #e6c5ff;">
									<app-referee-feedback-form
										[jobApplication]="jobApplicationForm$ | async "
										[job]="job$ | async" 
										(submitRefereeFeedbackEvent)="submitRefereeFeedbackHandler($event)"
										>
									</app-referee-feedback-form>
								</div>
							</div>
						</div>
					</div>
	`,
	styles: []
})
export class RefereeFeedbackPageComponent {
	jobApplicationForm$: Observable<JobApplication>;
	job$: Observable<Job>;

	constructor(private store: Store<fromRoot.State>) {
		this.jobApplicationForm$ = this.store.select(fromRoot.getJobApplicationReferenceFeedback);
		this.job$ = this.store.select(fromRoot.getJobReferenceFeedback);
	}

	submitRefereeFeedbackHandler(feedback: RefereeFeedback) {
		this.store.dispatch(new refereeAction.SubmitFeedbackAction({ feedback }));
	}
}
