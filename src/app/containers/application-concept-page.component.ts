import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

import * as fromRoot from '../reducers';
import * as login from '../actions/login.action';
import { User } from 'app/models/user.model';
import { Store } from '@ngrx/store';
import { getLoaded } from 'app/reducers/login.reducer';
import { Job } from 'app/models/job.model';
import { JobService } from 'app/services/job.service';
import { Observable } from 'rxjs';
import * as JobApplicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-concept-page',
	template: `
	<div class="container">
		<div class="row container-fluid">
			<app-application-concept (ApplyButtonConceptEvent)="applyButtonConceptHandler($event)"></app-application-concept>
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
