import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Job } from '../models/job.model';
import { User } from '../models/user.model';
import * as fromRoot from '../reducers';
import * as jobsAction from '../actions/jobs.action';

@Component({
	selector: 'app-job-content-header-view',
	template: `
		<div class='row col-md-12'>
			<div class='col-md-10 div-padding text-center'>
					<h3 class="job-title mb-0 text-primary">{{job.title}}</h3>
					<p class="job-company mb-0">Job ID: {{job._id}}</p>
					<p class="date-posted mb-0">Posted: {{job.createdAt | date: 'yyyy-MM-dd'}}</p>
			</div>
			<div class='col-md-2 text-center'>
				<i class="fa fa-star-o bookmark set-font" [ngClass]="{'bookmark-selected': isBookmarked}" (click)="updateBookmark()"></i>
				<p class="addBookmark">Add to Bookmarks</p>
			</div>
		</div>
	`,

	styles: [`
	img {
		width: 300px;
		height: 100px;
	}
	.job-title {
		font-weight: 700;
	}
	.div-padding {
		padding-bottom: 10px;
	}
	.mb-0 {
		margin-bottom: 0;
		line-height: 1;
	}
	.addBookmark{
		font-size: smaller;
	}
	.bookmark:hover {
		color: yellow;
		cursor: pointer;
    	-webkit-text-stroke-width: 1px;
    	-webkit-text-stroke-color: orange;
	}
	.bookmark-selected {
		color: yellow;
		cursor: pointer;
    	-webkit-text-stroke-width: 1px;
    	-webkit-text-stroke-color: orange;
	}
	.set-font {
		font-size: 25px;
	}
	`]
})

export class JobContentHeaderViewComponent {
	@Input() job: Job;
	@Input() user: User;
	isBookmarked: boolean = false;

	constructor(private store: Store<fromRoot.State>) {
		if (this.user && this.job) {
			this.isBookmarked = this.user.bookmark_ids.indexOf(this.job._id) > -1 ? true : false;
		}
	}

	updateBookmark() {
		let payload = { userId: this.user.id };
		this.isBookmarked = this.isBookmarked ? false : true;
		if (this.isBookmarked) {
			payload['body'] = { postId: this.job._id };
			this.store.dispatch(new jobsAction.AddBookmarkAction(payload));
		} else {
			payload['postId'] = this.job._id;
			this.store.dispatch(new jobsAction.RemoveBookmarkAction(payload));
		}

	}

}
