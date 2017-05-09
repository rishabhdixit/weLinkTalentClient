import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-header',
	template: `
		<div class='row col-md-12'>
			<div class='col-md-10 div-padding text-center'>
					<h3 class="job-title mb-0 text-primary">{{job.title}}</h3>
					<p class="job-company mb-0">Job ID: {{job._id}}</p>
					<p class="date-posted mb-0">Posted: {{job.createdAt | date: 'yyyy-MM-dd'}}</p>
			</div>
			<div class='col-md-2 text-center'>
				<i class="fa fa-star-o bookmark" aria-hidden="true" style="font-size: 25px;" (click)="onClick"></i>
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
	`]
})

export class JobFullHeaderComponent {
	@Input() job: Job;

	constructor() {
	}

}
