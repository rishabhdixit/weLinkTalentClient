import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as jobsAppliedAction from '../actions/jobs-applied.action';
import * as jobsAction from '../actions/jobs.action';
import * as fromRoot from '../reducers';

import { JobsApplied } from '../models/jobs-applied.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-job-applied-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<br/>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<app-application-for-header [job]="jobFromApplication$ | async"></app-application-for-header>
				</div>
			</div>
			<br/>
			<div *ngIf="selectedCandidateJobApplied" class="row">
				<div class="col-md-6" style="background-color: #cdcdcd;">
					<br/>
					<app-job-applied-detail-view
						[jobApplied]="candidateJobApplied$ | async">
					</app-job-applied-detail-view>
				</div>
				<div class="col-md-6" style="background-color: #cfb5dd;">
					<br/>
					<app-job-applied-feedback-view
						(OnApprovedFeedbackEvent)="onApprovedFeedbackHandler($event)"
						[jobApplied]="candidateJobApplied$ | async">
					</app-job-applied-feedback-view>
				</div>
			</div>
		</div>
	`,
	styles: [``],
})

export class JobAppliedPageComponent implements OnInit {

	candidateJobApplied$: Observable<JobsApplied>;
	selectedCandidateJobApplied: JobsApplied;
	jobFromApplication$: Observable<Job>;

	constructor(private store: Store<fromRoot.State>) {
		this.candidateJobApplied$ = this.store.select(fromRoot.getSelectedJobApplied);
	}

	ngOnInit() {
		this.store.select(fromRoot.getSelectedJobApplied).subscribe((data) => this.selectedCandidateJobApplied = data);
		this.store.dispatch(new jobsAction.LoadJobFromApplication(this.selectedCandidateJobApplied.job_id));
		this.jobFromApplication$ = this.store.select(fromRoot.getJobFromApplication);
	}

	onApprovedFeedbackHandler(queryObject: any): void {
		this.store.dispatch(new jobsAppliedAction.ApplicationApproveFeedbackAction(queryObject));
	}
}
