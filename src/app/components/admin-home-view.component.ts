import { Component } from '@angular/core';

import { Job } from '../models/job.model';
import { Store } from '@ngrx/store';

import * as jobAction from '../actions/jobs.action';
import * as fromRoot from '../reducers';

@Component({
	selector: `app-admin-home-view`,
	template: `
		<div class="row">
			<div class="col-md-12">
				<app-create-job-form (OnCreateJobEvent)="onCreateJobHandler($event)"></app-create-job-form>
			</div>
		</div>
		<br/>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<app-job-list></app-job-list>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminHomeViewComponent {

	constructor(private store: Store<fromRoot.State>) {}

	onCreateJobHandler(job: Job) {
		this.store.dispatch(new jobAction.JobCreationAction(job));
	}
}
