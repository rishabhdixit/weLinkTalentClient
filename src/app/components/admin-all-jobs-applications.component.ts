import {Component, EventEmitter, Input, Output} from '@angular/core';
import { JobApplication } from '../models/job-application.model';

@Component({
	selector: `app-admin-all-jobs-applications`,
	template: `
		<div class="row pull-right">
			<div style="margin-bottom: 1rem;">
				<div class="form-group pull-right">
					<div class="input-group search">
						<span class="input-group-addon"><i class="fa fa-search"></i></span>
						<input type="text" class="form-control"/>
					</div>
				</div>
			</div>
		</div>
		<table class="table table-bordered table-hover">
			<thead>
			<tr>
				<th> Candidate Name </th>
				<th> Company </th>
				<th> Job Title </th>
				<th> Availability </th>
				<th> Status </th>
				<th> Contacted </th>
				<th> Reviewed </th>
				<th> Comment </th>
			</tr>
			</thead>
			<tbody>
				<tr *ngFor="let application of jobApplications">
					<td> {{ application.user.firstName }} {{ application.user.lastName }} </td>
					<td> {{ application.job.company.name }} </td>
					<td> {{ application.job.title }} </td>
					<td> {{ application.availability }} </td>
					<td> {{ application.status }} </td>
					<td>
						<input type="checkbox" class="input-checkbox"
						       [ngModel]="application.contacted"
						       [checked]="application.contacted"
						       (change)="onClickedContacted(application, !$event.target.checked)"/>
					</td>
					<td>
						<input type="checkbox" class="input-checkbox"
						       [(ngModel)]="application.recruiter_reviewed"
						       [checked]="application.recruiter_reviewed"
						       (change)="onClickedReviewed(application, !$event.target.checked)"/>
					</td>
					<td> {{ application.comment }} </td>
				</tr>
			</tbody>
		</table>
	`,
	styles: [`
		.input-checkbox {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}
		th {
			text-align: center;
		}
	`],
})

export class AdminAllJobsApplicationsComponent {
	@Input() jobApplications: [JobApplication];
	@Output() isContactedEmitter = new EventEmitter<any>();
	@Output() isReviewedEmitter = new EventEmitter<any>();

	constructor() {	}

	onClickedContacted(application: JobApplication, contacted: boolean) {
		this.isContactedEmitter.emit({
			id: application.id,
			data: {
				contacted: ( contacted ) ? false : true
			}
		});
	}

	onClickedReviewed(application: JobApplication, review: boolean) {
		this.isReviewedEmitter.emit({
			id: application.id,
			data: {
				recruiter_reviewed: ( review ) ? false : true,
			}
		});
	}
}
