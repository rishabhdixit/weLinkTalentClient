import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

import * as jobsAction from '../actions/jobs.action';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-job-search-page',
	template: `
<app-header></app-header>     			
<div class="container">
    <div class="container-fluid">
        <div class="row col-md-12">
        		<!--// TODO: Fully implement search-->
           <app-job-search></app-job-search>
        </div>
        <div class="row col-md-12">
        	<div class="col-md-8">
        		<app-job-view class="row" *ngFor="let job of jobList | async" [job]="job">Loading ... </app-job-view>
					</div>
        	<div class="col-md-4"></div>
        </div>
        <div class="row col-md-12">
        	<!--// TODO: Fully implement paging-->
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
	}
}
