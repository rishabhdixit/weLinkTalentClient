import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import * as fromRoot from '../reducers';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import { JobApplication } from '../models/job-application.model';
import * as applicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-form-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="row container-fluid">
				<div class="col-md-12">
					<app-candidate-job-application-form-page
						[job]="job$ | async"
						(applicationEventEmitter)="applyClickHandler($event)">
					</app-candidate-job-application-form-page>
				</div>
			</div>
		</div>
	`,

	styles: [`
		h2 {
			text-align: center;
			color: #4D308E;
		}
	`],
})

export class ApplicationFormPageComponent {
	job$: Observable<Job>;
	jobId: string;
	user: User;

	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getApplicationJob);
		this.job$.subscribe((data: Job) => this.jobId = data._id);
		this.store.select(fromRoot.getUser).subscribe((data: User) => this.user = data);
	}

	applyClickHandler(application: JobApplication) {
		let formData: FormData = new FormData();
		let fileList: FileList = application.files;

		_.forIn(application, function (value, key) {
			if (typeof value === 'object') {
				formData.append(key, JSON.stringify(value));
			} else {
				formData.append(key, value);
			}
		});

		for (let i = 0; i < fileList.length && fileList.length <= 5; i++) {
			let file: File = fileList[i];
			formData.append('files', file, file.name);
		}
		formData.append('job_id', this.jobId);
		formData.append('user_id', this.user.id);
		this.store.dispatch(new applicationAction.ApplicationFormSubmitAction(formData));
	}
}
