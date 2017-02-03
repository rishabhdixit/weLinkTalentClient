import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-header',
	template: `
	<div class="row">
			<div class='col-md-12'>
					<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-rounded" />
			</div>
	</div>
	<div class='row'>
			<div class='col-md-10 div-padding'>
					<h3 class="job-title">{{job.title}}</h3>
					<h4 class="job-company">{{job.company}} | {{job.location}}</h4>
			</div>
			<div class="col-md-2"> &nbsp; </div>
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
	.job-company {
		font-weight: 500;
		font-style: italic;
	}
	.div-padding {
		padding-bottom: 10px;
	}
`]})

export class JobFullHeaderComponent {
	@Input() job: Job;
	constructor() {
	}
}
