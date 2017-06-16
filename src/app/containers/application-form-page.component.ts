import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

import * as fromRoot from '../reducers';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import { Application } from '../models/job-application.model';
import * as applicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-form-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="row container-fluid">
				<div class="col-md-12">
					<app-candidate-job-application-form-page [job]="job$ | async"
									(applicationEventEmitter)="applyClickHandler($event)"></app-candidate-job-application-form-page>
				</div>
				<!--<div  class="col-md-12">-->
					<!--<h2>Application for:</h2>-->
				<!--</div>-->
				<!--<div class="col-md-7" style="background: lightgray;">-->
					<!--<app-job-application-form-page [job]="job$ | async"-->
									<!--(applicationEventEmitter)="applyClickHandler($event)"></app-job-application-form-page>-->
				<!--</div>-->
				<!--<div class="col-md-5" style="float: right; background: #e6c5ff;">-->
					<!--<app-candidate-referee-application-form [job]="job$ | async"></app-candidate-referee-application-form>-->
				<!--</div>-->
			</div>
		</div>
	`,

	styles: [`
		h2 {
			text-align: center;
			color: #4D308E;
		}
		.job-detail {
			margin-bottom: 5px;
			text-align: center;
			font-size: x-large;
			color: dimgray;
		}
	`],
})

export class ApplicationFormPageComponent {
	job$: Observable<Job>;
	jobId: string;
	user: User;
	fileArray: Array<any>;

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

		formData.append('job_id', this.jobId);
		formData.append('user_id', this.user.id);
		this.store.dispatch(new applicationAction.ApplicationFormSubmitAction(formData));
	}
}
