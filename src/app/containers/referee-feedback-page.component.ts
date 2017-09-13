import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as refereeAction from '../actions/referee-feedback.action';
import * as jobsAction from '../actions/jobs.action';
import { JobApplication } from '../models/job-application.model';
import { RefereeFeedback } from '../models/referee-feedback.model';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-referee-feedback-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<br/>
				<div class="row">
					<div class="col-md-12 text-center">
						<app-application-for-header [job]="jobFromApplication$ | async"></app-application-for-header>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-6" style="background: lightgray;">
						<app-referee-feedback-application-view
                        [jobApplication]="jobApplicationForm$ | async">
							</app-referee-feedback-application-view>
					</div>
					<div class="col-md-6" style="float: right; background: #e6c5ff;">
						<app-referee-feedback-form
							[jobApplication]="jobApplicationForm$ | async"
							(submitRefereeFeedbackEvent)="submitRefereeFeedbackHandler($event)">
						</app-referee-feedback-form>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		h2 {
			width: 100%;
		}
	`]
})
export class RefereeFeedbackPageComponent {
	jobApplicationForm$: Observable<JobApplication>;
	jobFromApplication$: Observable<Job>;
	jobId: string;

	constructor(private store: Store<fromRoot.State>) {
		this.jobApplicationForm$ = this.store.select(fromRoot.getJobApplicationReferenceFeedback);
		this.jobApplicationForm$.subscribe((data: JobApplication) => this.jobId = data.job_id);
		this.store.dispatch(new jobsAction.LoadJobFromApplication(this.jobId));
		this.jobFromApplication$ = this.store.select(fromRoot.getJobFromApplication);
	}

	submitRefereeFeedbackHandler(feedback: RefereeFeedback) {
		this.store.dispatch(new refereeAction.SubmitFeedbackAction({ feedback }));
	}
}
