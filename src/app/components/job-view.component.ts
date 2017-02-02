import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-view',
	template: `
<div class="row">
    <div class="col-md-9">
        <h4><a routerLink="/jobs/{{job.id}}"> {{job.title}}</a></h4>
        <div class="div-padding">
            <span class="jobCompany">{{job.company}}</span> |
            <span class="jobLocation">{{job.location}}</span>
        </div>
        <dl>
            <dt> Description </dt>
            <dd class="jobTxt">{{job.description}}</dd>
            <dt> Skills </dt>
            <dd class="jobTxt">{{job.skills}}</dd>
            <dt> Experience </dt>
            <dd>{{job.yearsExperience}}</dd>
            <a routerLink="/jobs/{{job.id}}">more ... »</a>
        </dl>
    </div>
    <div class="col-md-3">
    </div>
</div>
`,
	styles: [`
		.jobTxt {
			white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	margin-bottom: 5px;
    	line-height: 1.2;
    	outline: none;
		}
		.jobCompany {
			color: #0275d8;
			font-weight: 700;
			text-decoration: underline;
		}
		.jobLocation {
			color: #0275d8;
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
	constructor() {
	}
}
