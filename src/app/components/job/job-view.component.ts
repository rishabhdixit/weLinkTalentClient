import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-view',
	template: `
	<div class="row">
		<div class="col-md-9">
			<h4><a routerLink="/jobs/{{job._id}}" class="purple-color"> {{job.title}}</a></h4>
			<div class="div-padding">
				<span class="job-company purple-color">{{job.company.name}}</span> |
				<span class="job-location purple-color">{{job.location}}</span>
			</div>
			<dl>
				<dt> Description </dt>
				<dd class="job-txt">{{job.description}}</dd>
				<dt> Ideal Talent </dt>
				<dd class="job-txt">{{job.ideal_talent}}</dd>
				<dt> Experience </dt>
				<dd>{{job.years_experience}}</dd>
				<a routerLink="/jobs/{{job._id}}">more ... »</a>
			</dl>
			</div>
			<div class="col-md-3">
		</div>
	</div>
`,
	styles: [`
		.job-txt {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin-bottom: 5px;
			line-height: 1.2;
			outline: none;
		}
		.job-company {
			font-weight: 700;
			text-decoration: underline;
		}
		.job-location {
			font-weight: 500;
			font-style: italic;
		}
		.div-padding {
			padding-bottom: 10px;
		}
`]
})
export class JobViewComponent {
	@Input() job: Job;

	constructor() {	}
}
