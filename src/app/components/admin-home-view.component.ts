import { Component } from '@angular/core';

import { Job } from '../models/job.model';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

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

	constructor(private store: Store<fromRoot.State>) {
	}

	onCreateJobHandler(job: Job) {
		let formData: FormData = new FormData();
		let fileList: FileList = job.company_logo;

		_.forIn(job, function (value, key) {
			if (typeof value === 'object') {
				formData.append(key, JSON.stringify(value));
			} else {
				formData.append(key, value);
			}
		});

		if (fileList.length > 0) {
			let file: File = fileList[0];
			formData.set('company_logo', file, file.name);
		}

		this.store.dispatch(new jobAction.JobCreationAction(formData));
	}
}
