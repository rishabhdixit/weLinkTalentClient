import { Component, Input } from '@angular/core';

import * as fromRoot from '../reducers';
import { User } from 'app/models/user.model';
import { Store } from '@ngrx/store';
import { Job } from 'app/models/job.model';
import { Observable } from 'rxjs';
import * as JobApplicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-concept-page',
	template: `
	<div class="container">
		<div class="row container-fluid">
			<app-application-concept [job]="job$ | async" 
			                         (ApplyButtonConceptEvent)="applyButtonConceptHandler($event)">
			</app-application-concept>
		</div>
	</div>
	`,
	styles: [``],
})

export class ApplicationConceptPageComponent {
	@Input() user: User;
	job$: Observable<Job>;
	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}

	applyButtonConceptHandler(job: Job) {
		this.store.dispatch(new JobApplicationAction.ApplicationFormLoadAction(true));
	}
}
