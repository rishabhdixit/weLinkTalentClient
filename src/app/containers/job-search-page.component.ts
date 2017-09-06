import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import * as _ from 'lodash';
import * as jobsAction from '../actions/jobs.action';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-job-search-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="container">
		<div class="container-fluid">
			<!--// TODO: Fully implement search-->
			<app-job-search (searchButtonClick)="onSearchButtonClick($event)"></app-job-search>
			<app-job-view *ngFor="let job of jobList$ | async | paginate: { itemsPerPage: 10, 
				currentPage: currentPage, 
				totalItems: jobsTotalSize$ | async }" 
				[job]="job">{{ job }}</app-job-view>
			<!--// TODO: Fully implement paging-->
			<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
		</div>
	</div>
  `,
	styles: [``],
})
export class JobSearchPageComponent {
	jobList$: Observable<Job[]>;
	jobsTotalSize$: Observable<number>;
	currentPage = 1;
	jobQuery: Job;

	constructor(private store: Store<fromRoot.State>) {
		this.store.dispatch(new jobsAction.JobsLoadAction(`page=${this.currentPage}`));
		this.jobList$ = this.store.select(fromRoot.getAllJobs);
		this.jobsTotalSize$ = this.store.select(fromRoot.getTotalJobsSearch);
	}

	onChangePage(event) {
		this.currentPage = event;

		let query = `page=${this.currentPage}`;

		if (_.get(this, 'jobQuery.location')) {
			query = `${query}&location=${this.jobQuery.location}`;
		}

		if (_.get(this, 'jobQuery.title')) {
			query = `${query}&title=${this.jobQuery.title}`;
		}

		this.store.dispatch(new jobsAction.JobsLoadAction(query));
	}

	onSearchButtonClick(event) {
		this.currentPage = 1;
		this.jobQuery = event;

		let query = `page=${this.currentPage}`;

		if (event.location) {
			query = `${query}&location=${event.location}`;
		}

		if (event.title) {
			query = `${query}&title=${event.title}`;
		}

		this.store.dispatch(new jobsAction.JobsLoadAction(query));
	}
}
