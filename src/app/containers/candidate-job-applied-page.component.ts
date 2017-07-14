import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';

import { CandidateJobsApplied } from '../models/candidate-jobs-applied.model';

@Component({
	selector: `app-candidate-job-applied-page`,
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
					<app-candidate-job-applied-detail-view
						[candidateJobApplied]="candidateJobApplied$ | async">
						{{candidateJobApplied}}
					</app-candidate-job-applied-detail-view>
				</div>
				<div class="col-md-6" style="background-color: #cfb5dd;">
					<br/>
					<app-candidate-job-applied-feedback-view
						[candidateJobApplied]="candidateJobApplied$ | async">
						{{candidateJobApplied}}
					</app-candidate-job-applied-feedback-view>
				</div>
			</div>
		</div>
	`,
	styles: [``],
})

export class CandidateJobAppliedPageComponent implements OnInit {
	candidateJobApplied$: Observable<CandidateJobsApplied>;
	selectedCandidateJobApplied: CandidateJobsApplied;

	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.candidateJobApplied$ = this.store.select(fromRoot.getSelectedCandidateJobApplied);
	}

	ngOnInit() {
		this.store.select(fromRoot.getSelectedCandidateJobApplied).subscribe(
			(candidateJobApplied) => this.selectedCandidateJobApplied = candidateJobApplied);
	}

	isViewable() {
		return (this.selectedCandidateJobApplied && this.selectedCandidateJobApplied.company);
	}
}
