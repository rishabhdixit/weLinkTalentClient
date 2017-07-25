import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/job.model';
import * as fromRoot from '../../reducers';
import * as JobAction from '../../actions/jobs.action';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-10">
						<h2><span>Created Jobs</span></h2>
					</div>
					<div class="col-md-2">
						<button class="btn btn-primary form-control" (click)="onClickCreateJob()">Create a Job</button>
					</div>
				</div>
				<!--// TODO : handle search -->
				<app-job-search></app-job-search>
				<app-job-created-view *ngFor="let job of jobList$ | async 
								| paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: jobsTotalSize$ | async }" [job]="job">
				</app-job-created-view>
				<br/>
				<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
			</div>
		</div>
	`,
	styles: [``],
})

export class AdminHomePageComponent implements OnInit {
	jobList$: Observable<Job[]>;
	jobsTotalSize$: Observable<number>;
	currentPage = 1;
	currentUser: User;

	constructor(private store: Store<fromRoot.State>, private router: Router) {
	}

	ngOnInit() {
		// TODO - check this it might have problem if the user data has delay
		this.store.select(fromRoot.getUser).subscribe((user) => this.currentUser = user);
		if (this.currentUser) {
			this.store.dispatch(new JobAction.CreateJobsLoadAction(this.currentUser.id));
			this.jobList$ = this.store.select(fromRoot.getAllJobsCreated);
			this.jobsTotalSize$ = this.store.select(fromRoot.getTotalJobsCreated);
		}
	}

	onChangePage(event) {
		if (this.currentUser) {
			this.currentPage = event;
			this.store.dispatch(new JobAction.CreateJobsLoadAction(this.currentUser.id));
		}
	}

	onClickCreateJob() {
		this.router.navigate(['admin/create-job']);
	}
}
