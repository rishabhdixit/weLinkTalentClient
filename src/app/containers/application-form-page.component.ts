import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store, State} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as _ from 'lodash';

import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import {Job} from '../models/job.model';
import {User} from '../models/user.model';
import {Application} from '../models/job-application.model';
import * as applicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-form-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<app-job-application-form-page [job]="job$ | async"
								(applicationEventEmitter)="applyClickHandler($event)"></app-job-application-form-page>
					</div>
				</div>
			</div>
		</div>
	`,

	styles: [``],
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

	applyClickHandler(application: Application) {
		let formData: FormData = new FormData();
		let fileList: FileList = application.file;
		_.forIn(application, function (value, key) {
			formData.append(key, value);
		});

		if (fileList.length > 0) {
			let file: File = fileList[0];
			formData.append('file', file, file.name);
		}
		// if (fileList.length > 0 && fileList.length <= 5) {
		// 	for (let i = 0; i <= fileList.length; i++) {
		// 		let file: File = fileList[i];
		// 		formData.append('file', file, file.name);
		// 		console.log('success');
		// 	}
		// }

		formData.append('job_id', this.jobId);
		formData.append('user_id', this.user.id);
		this.store.dispatch(new applicationAction.ApplicationFormSubmitAction(formData));
	}
}
