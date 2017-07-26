import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';

import { JobsApplied } from '../models/jobs-applied.model';

@Component({
	selector: `app-job-applied-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<br/>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<h5>Application for:</h5>
				</div>
				<div class="col-md-12 text-center">
					<h5 style="color: #57148D;" *ngIf="isViewable()">
						{{selectedCandidateJobApplied.title}} - {{selectedCandidateJobApplied.company.name}}
					</h5>
				</div>
			</div>
			<br/>
			<div *ngIf="selectedCandidateJobApplied" class="row">
				<div class="col-md-6" style="background-color: #cdcdcd;">
					<br/>
					<app-job-applied-detail-view
						[jobApplied]="candidateJobApplied$ | async">
						{{candidateJobApplied}}
					</app-job-applied-detail-view>
				</div>
				<div class="col-md-6" style="background-color: #cfb5dd;">
					<br/>
					<app-job-applied-feedback-view
						[jobApplied]="candidateJobApplied$ | async">
						{{candidateJobApplied}}
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

	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.candidateJobApplied$ = this.store.select(fromRoot.getSelectedJobApplied);
	}

	ngOnInit() {
		this.store.select(fromRoot.getSelectedJobApplied).subscribe((data) => this.selectedCandidateJobApplied = data);
	}

	isViewable() {
		return (this.selectedCandidateJobApplied && this.selectedCandidateJobApplied.company);
	}
}