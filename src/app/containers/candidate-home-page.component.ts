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
			<div class="row">
				<div class="col-md-6">
					<h5 style="color: #57148D;">Legend:</h5>
					<br/>
					<h6>1st Circle - Self Application Form Status</h6>
					<br/>
					<h6>2nd Circle - Referee Validation Form Status</h6>
					<br/>
					<h6>3rd Circle - Application Submission Status</h6>
					<h6 style="text-align: center;">(with Referee Validation)</h6>
				</div>
				<div class="col-md-6">
					<h5 style="color: #57148D;">Colour Codes:</h5>
					<br/>
					<div class="row">
						<div class="col-md-9">
							<h6>Incomplete</h6>
						</div>
						<div class="col-md-3">
							<i class="fa fa-circle fa-lg" style="color: red;" aria-hidden="true"></i>
						</div>
					</div>
					<br/>
					<div class="row">
						<div class="col-md-9">
							<h6>Completed (yet to submit)</h6>
						</div>
						<div class="col-md-3">
							<i class="fa fa-circle fa-lg" style="color: yellow;" aria-hidden="true"></i>
						</div>
					</div>
					<br/>
					<div class="row">
						<div class="col-md-9">
							<h6>Submitted</h6>
						</div>
						<div class="col-md-3">
							<i class="fa fa-circle fa-lg" style="color: green;" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<div class="row">
				<div class="col-md-12">
					<h4 style="color: #58595b;">Your Applications</h4>
				</div>
			</div>
			<br/>
			<div class="row">
				<div class="col-md-5 text-center">
					<h5 style="color: #57148D;">Job Title</h5>
				</div>
				<div class="col-md-3 text-center">
					<h5 style="color: #57148D;">Status</h5>
				</div>
				<div class="col-md-4 text-center">
					<h5 style="color: #57148D;">Application Status</h5>
				</div>
			</div>
			<br/>
			<app-jobs-applied-view
				*ngFor="let candidateJobApplication of candidateJobApplicationsList$ | async | paginate: { itemsPerPage: 10, 
				currentPage: currentPage, 
				totalItems: candidateJobApplicationsTotalSize$ | async }
				let counter = index"
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

	ngOnInit() {
		this.store.select(fromRoot.getUserId).subscribe(res => {
			this.currentUserId = res;
		});
		this.store.dispatch(new jobsAppliedAction.JobsAppliedLoadAction({
			user: `${this.currentUserId}`,
			page: `page=${this.currentPage}`
		}));
		this.candidateJobApplicationsList$ = this.store.select(fromRoot.getJobsApplied);
		this.candidateJobApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplied);
	}

	onChangePage(event) {
		this.currentPage = event;
		this.store.dispatch(new jobsAppliedAction.JobsAppliedLoadAction({
			user: `${this.currentUserId}`,
			page: `page=${this.currentPage}`
		}));
	}
}
