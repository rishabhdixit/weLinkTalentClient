import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-view',
	template: `
<div class="row">
    <div class="col-md-12">
        <div class="row col-md-12">
            <h4><a routerLink="/jobDetails/{{job.id}}"> {{job.title}}</a></h4>
            <span class="label label-default">{{job.company}}</span> 
            <span class="label label-info">{{job.location}}</span>
            <dl>
                <dt> Description </dt>
                <dd class="jobTxt">{{job.description}}</dd>

                <dt> Skills </dt>
                <dd class="jobTxt">{{job.skills}}</dd>

                <dt> Experience </dt>
                <dd>{{job.yearsExperience}}</dd>
                <a routerLink="/jobDetails/{{job.id}}">more ... »</a>
            </dl>
        </div>
    </div>
</div>
`,
	styles: [`
		.jobTxt{
			white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	margin-bottom: 5px;
    	line-height: 1.2;
    	outline: none;
		}
		.label{
			border-radius: .1em;
		}
`]
})
export class JobViewComponent {
	@Input() job: Job;
	constructor() {
	}
}
