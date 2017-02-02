import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-job-selected-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
    <app-job-full-header [job]="job$ | async"></app-job-full-header>
		<app-job-full-body [job]="job$ | async"></app-job-full-body>
		<app-job-buttons [job]="job$ | async"></app-job-buttons>
  `,
	styles: []
})
export class JobSelectedPageComponent {
	job$: Observable<Job>;
	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}
}
