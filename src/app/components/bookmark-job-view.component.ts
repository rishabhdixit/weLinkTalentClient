import {Component, Input, OnInit} from '@angular/core';
import { Job } from '../models/job.model';
import {User} from '../models/user.model';
import {Store} from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as jobsAction from '../actions/jobs.action';

@Component({
	selector: 'app-bookmark-job-view',
	template: `
		<div class="row">
			<div class="col-md-7">
				<div class="row">
					<div class="col-md-12">
						<h5 style="color: #57148D;">{{job.title}}</h5>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7">
						<h6 style="color: #58595b;" *ngIf="job.company">{{job.company.name}}</h6>
					</div>
					<div class="col-md-5 text-right">
						<p>Posted {{job.createdAt | date: 'yyyy-MM-dd'}}</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<p *ngIf="job.company" class="text-justify">{{job.company.about}}</p>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<br/>
				<div class="row">
					<div class='col-md-12 text-center'>
						<i class="fa fa-star fa-2x" [ngClass]="{'bookmark-selected': isBookmarked, 'bookmark-unselected': !isBookmarked}"
							 (click)="removeBookmark()"></i>
						<p class="addBookmark">{{isBookmarked? "Remove Bookmarks" : "Add Bookmarks"}}</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-10 tex-center">
						<div class="text-center application-slots">
							<h2 style="color: #FFF;">{{job.remaining_slots}}</h2>
							<h6 style="color: #FFF;">Application Slots Left</h6>
						</div>
					</div>
					<div class="col-md-1"></div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-6">
						<h5>Location:</h5>
						<h5>Job type:</h5>
						<h5>Emp type:</h5>
						<h5>Salary from:</h5>
						<h5>Salary to:</h5>
					</div>
					<div class="col-md-6">
						<h5>{{job.location}}</h5>
						<h5>Permanent</h5>
						<h5>{{job.employment_type}}</h5>
						<h5>{{job.salary_currency}}{{job.salary_from}}</h5>
						<h5>{{job.salary_currency}}{{job.salary_to}}</h5>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-10">
						<div class="read-more-link text-center">
							<a style="color: #FFF;" routerLink="/jobs/{{job.id}}"><h4>Read More</h4></a>
						</div>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<hr/>
			</div>
		</div>
	`,
	styles: [`
		.read-more-link {
			width: 100%;
			padding-top: 10px;
			padding-bottom: 10px;
			background: #57148D;
		}
		.application-slots {
			width: 100%;
			padding-top: 10px;
			padding-bottom: 10px;
			background: #58595b;
		}
		.bookmark-selected {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.bookmark-unselected {
			color: gray;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	`]
})
export class BookmarkJobViewComponent implements OnInit {
	@Input() job: Job;
	@Input() user: User;
	isBookmarked: boolean;

	constructor(private store: Store<fromRoot.State>) {
	}

	ngOnInit() {
		if (this.user && this.job) {
			this.isBookmarked = this.user.bookmark_ids.indexOf(this.job._id) > -1 ? true : false;
		}
	}

	removeBookmark() {
		if (this.user && this.job) {
			let payload = { userId: this.user.id };
			if (this.isBookmarked) {
				payload['postId'] = this.job._id;
				this.store.dispatch(new jobsAction.RemoveBookmarkAction(payload));
				this.isBookmarked = false;
			} else {
				payload['body'] = { postId: this.job._id };
				this.store.dispatch(new jobsAction.AddBookmarkAction(payload));
				this.isBookmarked = true;
			}
		}
	}
}
