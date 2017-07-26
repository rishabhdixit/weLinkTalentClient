import { Component, Input } from '@angular/core';

import { JobsApplied } from '../../models/jobs-applied.model';

@Component({
	selector: 'app-jobs-applied-view',
	template: `
		<div class="row">
			<div class="col-md-1">
				{{((currentPage - 1) * 10) + counter + 1}}
			</div>
			<div class="col-md-4">
				<h5 *ngIf="jobsApplied.title"><a routerLink="/job-application/{{jobsApplied.id}}">{{jobsApplied.title}}</a></h5>
				<h6 *ngIf="jobsApplied.company" style="color: #6F7071;">{{jobsApplied.company.name}}</h6>
			</div>
			<div class="col-md-3 text-center">
				<div class="row">
					<div class="col-md-12">
						<i *ngIf="jobsApplied.form_status == 'incomplete'"
							 class="fa fa-circle fa-lg"
							 style="color: red;"
							 aria-hidden="true"></i>
						<i *ngIf="jobsApplied.form_status == 'complete'"
							 class="fa fa-circle fa-lg"
							 style="color: yellow;"
							 aria-hidden="true"></i>
						<i *ngIf="jobsApplied.form_status == 'submitted'"
							 class="fa fa-circle fa-lg"
							 style="color: green;"
							 aria-hidden="true"></i>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div class="row">
					<div class="col-md-6">
						<h4>{{jobsApplied.form_status}}</h4>
					</div>
					<div class="col-md-6 text-center background-grey">
						<a href="" style="color: #FFFFFF;">
							<h6 *ngIf="jobsApplied.feedback_requested">View Feedback</h6>
							<h6 *ngIf="!jobsApplied.feedback_requested">Request Feedback</h6>
						</a>
					</div>
				</div>
				<br/>
			</div>
		</div>
	`,
	styles: [`
		.background-grey {
			padding: 10px;
			background-color: #58595b;
		}
	`],
})
export class JobsAppliedViewComponent {
	@Input() jobsApplied: JobsApplied;
	@Input() counter: number;
	@Input() currentPage: number;

	constructor() {
	}
}