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
	selector: `app-admin-create-job-page`,
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-create-job-form 
					(OnCreateJobEvent)="onCreateJobHandler($event)"
					(OnCancelCreateJobEvent)="onCancelCreateJobHandler()"
					[user]="currentUser$ | async"></app-create-job-form>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminCreateJobPageComponent {
	currentUser$: Observable<User>;

	constructor(private store: Store<fromRoot.State>,  private router: Router) {
		this.currentUser$ = 	this.store.select(fromRoot.getUser);
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
	onCancelCreateJobHandler() {
		this.router.navigate(['admin/home']);
	}
}
