import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { JobApplication } from '../../models/job-application.model';
import { User } from '../../models/user.model';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-admin-all-jobs-applications-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-admin-all-jobs-applications [jobApplication]="jobApplication" 
																				 [user]="user$">
				</app-admin-all-jobs-applications>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminAllJobsApplicationsPageComponent implements OnInit {
	jobApplication$: Observable<JobApplication>;
	user$: Observable<User>;
	job$: Observable<Job>;

	constructor(private store: Store<fromRoot.State>, private router: Router) {}

	ngOnInit() {
		this.user$ = this.store.select(fromRoot.getUser);
		// this.job$ = this.store.select(fromRoot.)
	}
}
