import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

import * as jobsAction from '../actions/jobs.action';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-job-search-page',
	template: `
<div class="container">
    <div class="container-fluid">
			<!--// TODO: Fully implement search-->
			<app-job-search></app-job-search>
			<app-job-view *ngFor="let job of jobList | async" [job]="job">Loading ... </app-job-view>
			<!--// TODO: Fully implement paging-->
			<app-pagination></app-pagination>
    </div>
</div>
  `,
	styles: []
})
export class JobSearchPageComponent {
	jobList: Observable<Job[]>;

	constructor(private store: Store<fromRoot.State>) {
		this.jobList = this.store.select(fromRoot.getAllJobs);
	}
}
