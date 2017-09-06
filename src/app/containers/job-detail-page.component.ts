import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Job } from '../models/job.model';
import { User } from '../models/user.model';

import * as fromRoot from '../reducers';
import * as jobsApplicationAction from '../actions/job-application.action';
import * as jobAction from '../actions/jobs.action';
import * as loginAction from '../actions/login.action';

@Component({
	selector: 'app-job-detail-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="container">
		<div class="row container-fluid">
			<div class="col-md-8">
				<app-job-content-header-view [job]="job$ | async" [user]="user"></app-job-content-header-view>
				<app-job-content-view [job]="job$ | async"></app-job-content-view>
				<br/>
				<app-job-buttons
					[job]="job$ | async"
					[user]="user"
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

	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}

	ngOnInit() {
		this.store.select(fromRoot.getUser).subscribe((user) => this.user = user);
		this.store.select(fromRoot.getSelectedJob).subscribe((job) => this.selectedJob = job);
		if (this.user && this.selectedJob) {
			this.store.dispatch(new jobAction.GetJobStatusAction({
				user: this.user.id,
				jobId: this.selectedJob._id
			}));
		}
	}

	applyButtonClickHandler(job: Job) {
		if (this.user) {
			this.store.dispatch(new jobsApplicationAction.ApplicationConceptLoadAction({ job: job, user: this.user }));
		} else {
			// Note : if not log in user, force user to log-in first before applying
			this.store.dispatch(new loginAction.RegisterRedirectUrlAction(`/jobs/${job._id}`));
			this.router.navigate(['login']);
		}
	}
}
