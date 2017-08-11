import {Component, EventEmitter, Input, Output} from '@angular/core';
import { JobApplication } from '../models/job-application.model';

@Component({
	selector: `app-admin-all-jobs-applications`,
	template: `
		<div class="row">
			<div class="col-md-12 pull-right" style="margin-bottom: 1rem;">
				<div class="form-group pull-right">
					<div class="input-group search">
						<span class="input-group-addon"><i class="fa fa-search"></i></span>
						<input type="text" class="form-control"/>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<table class="table table-bordered">
				<thead>
				<tr>
					<th> Candidate Name</th>
					<th> Company</th>
					<th> Job Title</th>
					<th> Availability</th>
					<th> Status</th>
					<th> Contacted</th>
					<th> Reviewed</th>
					<th> Comment</th>
					<th> Application Date</th>
					<th> Update </th>
				</tr>
				</thead>
				<tbody>
					<tr *ngFor="let application of jobApplications" class="text-center">
						<td> {{ application.user.firstName }} {{ application.user.lastName }}</td>
						<td> {{ application.job.company.name }}</td>
						<td> {{ application.job.title }}</td>
						<td> {{ application.availability }}</td>
						<td> {{ application.status }}</td>
						<td>
							<input type="checkbox" class="input-checkbox"
							       [ngModel]="application.contacted"
							       [checked]="application.contacted"
							       (change)="application.contacted = onClickedContacted($event.target.checked)"/>
						</td>
						<td>
							<input type="checkbox" class="input-checkbox"
							       (change)="application.recruiter_reviewed = onClickedReviewed($event.target.checked)"
							       [ngModel]="application.recruiter_reviewed"
							       [checked]="application.recruiter_reviewed"/>
						</td>
						<td><input type="text" class="something" [ngModel]="recruiter_comment"/></td>
						<td> Date</td>
						<td>
							<button (click)="onClickedUpdate(application)">Update</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
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
		.something {
			width: 100%;
			box-sizing: border-box;
			-webkit-box-sizing:border-box;
			-moz-box-sizing: border-box;
		}
	`],
})

export class AdminAllJobsApplicationsComponent {
	@Input() jobApplications: [JobApplication];
	@Output() isUpdatedEmitter = new EventEmitter<any>();

	constructor() {	}

	onClickedContacted(contacted: boolean) {
		console.log('Contacted: ', contacted);
		return ( contacted ) ? false : true;
	}

	onClickedReviewed(review: boolean) {
		console.log('Reviewed: ', review);
		return ( review ) ? false : true;
	}

	onClickedUpdate(application: JobApplication) {
		this.isUpdatedEmitter.emit({
			id: application.id,
			data: {
				contacted: application.contacted,
				recruiter_reviewed: application.recruiter_reviewed,
				recruiter_comment: application.recruiter_comment
			}
		});
	}
}
