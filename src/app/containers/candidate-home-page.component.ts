import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as jobsAppliedAction from '../actions/jobs-applied.action';

import { JobsApplied } from '../models/jobs-applied.model';

@Component({
	selector: `app-candidate-home-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<br/>
			<div class="row">
				<div class="col-md-4 text-center"></div>
				<div class="col-md-2 text-center">
					<h5 class="purple-color">References</h5>
				</div>
				<div class="col-md-1"></div>
				<div class="col-md-2 text-center">
					<h5 class="purple-color">Applications</h5>
				</div>
				<div class="col-md-3"></div>
			</div>
			<br/>
			<app-jobs-applied-view
				*ngFor="let candidateJobApplication of candidateJobApplicationsList$ | async | paginate: { itemsPerPage: 10,
				currentPage: currentPage,
				totalItems: candidateJobApplicationsTotalSize$ | async }
				let counter = index"
				(OnSendRequestFeedbackFromRecruiterEvent)="onSendRequestFeedbackFromRecruiterHandler($event)"
				(OnApplyToJobEvent)="onApplyToJobHandler($event)"
				[jobsApplied]="candidateJobApplication"
				[counter]="counter"
				[currentPage]="currentPage">{{ candidateJobApplication }} {{counter}} {{ currentPage }}
			</app-jobs-applied-view>
			<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
		</div>
	`,
	styles: [``],
})

export class CandidateHomePageComponent implements OnInit {
	candidateJobApplicationsList$: Observable<JobsApplied[]>;
	candidateJobApplicationsTotalSize$: Observable<number>;
	currentUserId: string;
	currentPage: number = 1;

	constructor(private store: Store<fromRoot.State>) { }

	ngOnInit(): void {
		this.store.select(fromRoot.getUserId).subscribe(userId => {
			this.currentUserId = userId;
		});
		this.store.dispatch(new jobsAppliedAction.JobsAppliedLoadAction({
			user: `${this.currentUserId}`,
			page: `page=${this.currentPage}`
		}));
		this.candidateJobApplicationsList$ = this.store.select(fromRoot.getJobsApplied);
		this.candidateJobApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplied);
	}

	onChangePage(event): void {
		this.currentPage = event;
		this.store.dispatch(new jobsAppliedAction.JobsAppliedLoadAction({
			user: `${this.currentUserId}`,
			page: `page=${this.currentPage}`
		}));
	}

	// TODO: implement send request feedback
	onSendRequestFeedbackFromRecruiterHandler(jobApplied: JobsApplied): void {

	}

	// TODO: implement apply to job
	onApplyToJobHandler(jobApplied: JobsApplied): void {

	}
}
