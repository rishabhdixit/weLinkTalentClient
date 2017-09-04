import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as JobApplicationAction from '../../actions/job-application.action';
import { JobApplication } from '../../models/job-application.model';
import { User } from '../../models/user.model';

@Component({
	selector: 'app-admin-all-jobs-applications-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-8"></div>
					<div class="col-md-4">
						<form [formGroup]="searchForm" (submit)="onSearchApplicants()">
							<div class="input-group">
								<span class="input-group-addon"><i class="fa fa-search"></i></span>
								<input type="text" formControlName="searchQuery" class="form-control"/>
							</div>
						</form>
					</div>
				</div>
				<br/>
				<app-admin-all-jobs-applications
					[jobApplications]="jobApplication$ | async | 
					paginate: { itemsPerPage: 10, currentPage: currentPage, totalItems: jobsApplicationsTotalSize$ | async }"
					[user]="user$"
					(isUpdatedEmitter)="isUpdatedHandler($event)">
				</app-admin-all-jobs-applications>
				<br/>
				<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminAllJobsApplicationsPageComponent implements OnInit {
	jobApplication$: Observable<JobApplication[]>;
	currentPage = 1;
	jobsApplicationsTotalSize$: Observable<number>;
	user$: Observable<User>;

	searchForm: FormGroup;

	constructor(public fb: FormBuilder, private store: Store<fromRoot.State>) {
		this.searchForm = this.fb.group({
			searchQuery: this.fb.control('')
		});
	}

	ngOnInit(): void {
		this.store.dispatch(new JobApplicationAction.AdminAllJobsApplicationsLoadAction(`page=${this.currentPage}`));
		this.jobApplication$ = this.store.select(fromRoot.getAllJobsApplication);
		this.jobsApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplications);
	}

	onSearchApplicants(): void {
		let searchQuery = '';
		if (this.searchForm.get('searchQuery').value && this.searchForm.get('searchQuery').value !== '') {
			searchQuery = `search=${this.searchForm.get('searchQuery').value}&page=${this.currentPage}`;
		} else {
			searchQuery = `page=${this.currentPage}`;
		}
		this.store.dispatch(new JobApplicationAction.AdminAllJobsApplicationsLoadAction(searchQuery));
		this.jobApplication$ = this.store.select(fromRoot.getAllJobsApplication);
		this.jobsApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplications);
	}

	onChangePage(event): void {
		this.currentPage = event;
		let searchQuery = '';
		if (this.searchForm.get('searchQuery').value && this.searchForm.get('searchQuery').value !== '') {
			searchQuery = `search=${this.searchForm.get('searchQuery').value}&page=${this.currentPage}`;
		} else {
			searchQuery = `page=${this.currentPage}`;
		}
		this.store.dispatch(new JobApplicationAction.AdminAllJobsApplicationsLoadAction(searchQuery));
		this.jobApplication$ = this.store.select(fromRoot.getAllJobsApplication);
		this.jobsApplicationsTotalSize$ = this.store.select(fromRoot.getTotalJobsApplications);
	}

	isUpdatedHandler(queryObject: any): void {
		this.store.dispatch(new JobApplicationAction.AdminUpdateJobApplicationDetailsAction(queryObject));
	}
}
