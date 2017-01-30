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
        <div class="row">
            <app-job-seach></app-job-seach>
        </div>
        <div class="row">
            <div class="col-md-12">
                <app-job-view *ngFor="let job of jobList | async" [job]="job"></app-job-view>
            </div>
        </div>
        <div class="row">
        	<app-pagination></app-pagination>
				</div>
    </div>
</div>
  `,
	styles: []
})
export class JobSearchPageComponent {
	jobList: Observable<Job[]>;

	constructor(private store: Store<fromRoot.State>) {
		this.jobList = this.store.select(fromRoot.getJobs);
		this.store.dispatch(new jobsAction.JobsLoadAction(''));
	}
}
