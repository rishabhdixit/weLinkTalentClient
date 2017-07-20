import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../../models/job.model';
import * as fromRoot from '../../reducers';
import * as JobAction from '../../actions/jobs.action';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="container-fluid">
					<app-admin-home-view></app-admin-home-view>
				<!--<div class="row">row-->
					<app-admin-job-created-view *ngFor="let job of jobList$ | async | paginate: { itemsPerPage: 10, 
																			currentPage: currentPage,
																			totalItems: jobsTotalSize$ | async }"
																			[job]="job">{{ job }}</app-admin-job-created-view>
				<br/>
				<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
				<!--</div>-->
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

	constructor(private store: Store<fromRoot.State>) {
	}

	ngOnInit() {
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
}
