import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store, State} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import {Job} from '../models/job.model';
import {User} from '../models/user.model';
import {Application} from '../models/job-application.model';
import * as applicationAction from '../actions/job-application.action';

@Component({
	selector: 'app-application-page-view',
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

export class ApplicationPageViewComponent {
	job$: Observable<Job>;
	jobId: string;
	user: User;

	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getApplicationJob);
		this.job$.subscribe((data: Job) => this.jobId = data._id);
		this.store.select(fromRoot.getUser).subscribe((data: User) => this.user = data);
	}

	applyClickHandler(application: Application) {
		let data = {
			job_id: this.jobId
			, form_data: application, user_id: this.user.id
		};
		this.store.dispatch(new applicationAction.ApplicationFormSubmitAction(data));
	}
}
