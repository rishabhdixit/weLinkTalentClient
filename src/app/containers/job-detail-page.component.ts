import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-job-detail-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="container">
		<div class="row container-fluid">
			<div class="col-md-8">
				<app-job-full-header [job]="job$ | async"></app-job-full-header>
				<app-job-full-body [job]="job$ | async"></app-job-full-body>
				<app-job-buttons [job]="job$ | async"></app-job-buttons>
			</div>
			<div class="col-md-4 sideStyle">
				<app-job-full-side [job]="job$ | async"></app-job-full-side>
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
export class JobDetailPageComponent {
	job$: Observable<Job>;
	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}
}
