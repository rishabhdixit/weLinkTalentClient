import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import * as fromRoot from '../reducers';

import * as jobsApplicationAction from '../actions/job-application.action';
import * as jobAction from '../actions/jobs.action';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { publishBehavior } from 'rxjs/operator/publishBehavior';
import { State } from '../reducers/job-application.reducer';
import { User } from '../models/user.model';

@Component({
	selector: 'app-job-detail-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="container">
		<div class="row container-fluid">
			<div class="col-md-8">
				<app-job-content-header-view [job]="job$ | async" [user]="user"></app-job-content-header-view>
				<app-job-content-view [job]="job$ | async"></app-job-content-view>
				<app-job-buttons
					[job]="job$ | async"
					(applyButtonClickEvent)="applyButtonClickHandler($event)"></app-job-buttons>
			</div>
			<div class="col-md-4 sideStyle">
				<app-job-content-side-view [job]="job$ | async"></app-job-content-side-view>
			</div>
		</div>
	</div>
  `,
	styles: [`
		.sideStyle {
			background: lightgrey;
			margin-top: -17px;
		}
	`],
})
export class JobDetailPageComponent implements OnInit {
	job$: Observable<Job>;
	selectedJob: Job;
	user: User;
	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}

	ngOnInit() {
		this.store.select(fromRoot.getUser).subscribe((user) => this.user = user);
		this.store.select(fromRoot.getSelectedJob).subscribe((job) => this.selectedJob = job);
		if (this.user && this.selectedJob) {
			this.store.dispatch(new jobAction.GetJobStatus({
				user: this.user.id,
				jobId: this.selectedJob._id
			}));
		}
	}

	applyButtonClickHandler(job: Job) {
		this.store.dispatch(new jobsApplicationAction.ApplicationConceptLoadAction({ job: job, user: this.user }));
	}
}
