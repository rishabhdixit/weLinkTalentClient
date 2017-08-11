import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { JobApplication } from '../../models/job-application.model';
import * as JobApplicationAction from '../../actions/job-application.action';

@Component({
	selector: 'app-admin-all-jobs-applications-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-admin-all-jobs-applications
					[jobApplications]="jobApplication$ | async | 
					paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: jobsApplicationsTotalSize$ | async }"
					[user]="user$"
					(isUpdatedEmitter)="isUpdatedHandler($event)">
				</app-admin-all-jobs-applications>
				<br/>
				<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
			</div>
		</div>
	`,
	styles: [`
		.container-fluid {
			padding-left: 0;
		}
	`]
})

export class AdminAllJobsApplicationsPageComponent implements OnInit {
	jobApplication$: Observable<JobApplication[]>;
	currentPage = 1;
	jobsApplicationsTotalSize$: Observable<number>;


	constructor(private store: Store<fromRoot.State>) {}

	ngOnInit() {
		this.store.dispatch(new JobApplicationAction.AdminAllJobsApplicationsLoadAction({}));
		this.jobApplication$ = this.store.select(fromRoot.getAllJobsApplication);
		this.jobsApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplications);
		// this.job$ = this.store.select(fromRoot.)
	}

	onChangePage(event) {
		this.currentPage = event;
		this.store.dispatch(new JobApplicationAction.AdminAllJobsApplicationsLoadAction({}));
	}

	isContactedHandler(queryObject: any) {
		this.store.dispatch(new JobApplicationAction.AdminUpdateJobsApplicationContactedAction(queryObject));
	}

	isReviewedHandler(queryObject: any) {
		this.store.dispatch(new JobApplicationAction.AdminUpdateJobsApplicationReviewedAction(queryObject));
	}

	isUpdatedHandler(queryObject: any) {
		console.log('Here is the Object Queried: ', queryObject);
		this.store.dispatch(new JobApplicationAction.AdminUpdateJobApplicationDetailsAction(queryObject));
	}
}
