import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-header',
	template: `
	
	<div class='row col-md-12'>
			<div class='col-md-10 div-padding text-center'>
					<h3 class="job-title mb-0 text-primary">{{job.title}}</h3>
					<p class="job-company mb-0">Job ID: {{job.id}}</p>
					<p class="date-posted mb-0">Posted: {{job.created_at}}</p>
			</div>
			<div class='col-md-2 text-center'>
				<span class="glyphicon glyphicon-star-empty"></span>
				<p class="addBookmark">Add to Bookmark</p>
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
	`]
})

export class JobFullHeaderComponent {
	@Input() job: Job;
	constructor() {
	}
}
