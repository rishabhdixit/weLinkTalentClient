import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import * as candidateBookmarkedJobsAction from '../actions/candidate-bookmarked-jobs.action';
import * as fromRoot from '../reducers';
import {User} from '../models/user.model';

@Component({
	selector: 'app-candidate-bookmark-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<h4 style="color: #58595b;">Your Bookmarks</h4>
					</div>
				</div>
				<br/>
				<app-candidate-bookmark-job-view *ngFor="let job of jobList$ | async | paginate: { itemsPerPage: 10, 
				currentPage: currentPage,
				totalItems: jobsTotalSize$ | async }"
				[job]="job"
				[user]="currentUser">{{ job }}{{ user }}</app-candidate-bookmark-job-view>
				<br/>
				<pagination-controls (pageChange)="onChangePage($event)"></pagination-controls>
			</div>
		</div>
	`,
	styles: [``],
})
export class CandidateBookmarkPageComponent implements OnInit {
	jobList$: Observable<Job[]>;
	jobsTotalSize$: Observable<number>;
	currentPage = 1;
	currentUser: User;

	constructor(private store: Store<fromRoot.State>) {
	}

	ngOnInit() {
		this.store.select(fromRoot.getUser).subscribe((user) => this.currentUser = user);
		if (this.currentUser) {
			this.store.dispatch(new candidateBookmarkedJobsAction.BookmarkJobsLoadAction(this.currentUser.id));
			this.jobList$ = this.store.select(fromRoot.getAllCandidateBookmarkedJobs);
			this.jobsTotalSize$ = this.store.select(fromRoot.getTotalCandidateBookmarkedJobs);
		}
	}

	onChangePage(event) {
		if (this.currentUser) {
			this.currentPage = event;
			this.store.dispatch(new candidateBookmarkedJobsAction.BookmarkJobsLoadAction(this.currentUser.id));
		}
	}
}
