import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/job.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { User } from '../../models/user.model';
import * as jobAction from '../../actions/jobs.action';
import * as fromRoot from '../../reducers';

@Component({
	selector: `app-admin-edit-job-page`,
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-edit-job-form 
					(OnEditJobEvent)="onEditJobHandler($event)"
					(OnCancelEditJobEvent)="onCancelEditJobHandler()"
					[user]="currentUser$ | async"
					[selectedJob]="selectedJob$ | async"></app-edit-job-form>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminEditJobPageComponent {
	currentUser$: Observable<User>;
	selectedJob$: Observable<Job>;
	selectedJobId: string;

	constructor(private store: Store<fromRoot.State>,  private router: Router) {
		this.currentUser$ = 	this.store.select(fromRoot.getUser);
		this.selectedJob$ = this.store.select(fromRoot.getSelectedJob);
		this.store.select(fromRoot.getSelectedJobId).subscribe((jobId) => this.selectedJobId = jobId);
	}

	onEditJobHandler(job: Job) {
		let formData: FormData = new FormData();
		let fileList: FileList = job.company_logo;
		delete job.company_logo;

		_.forIn(job, function (value, key) {
			if (typeof value === 'object') {
				formData.append(key, JSON.stringify(value));
			} else {
				formData.append(key, value);
			}
		});

		if (fileList.length > 0) {
			let file: File = fileList[0];
			formData.append('company_logo', file, file.name);
		}

		this.store.dispatch(new jobAction.JobEditingAction({
			jobId: this.selectedJobId,
			data: formData
		}));
	}

	onCancelEditJobHandler() {
		this.router.navigate(['admin/home']);
	}
}
