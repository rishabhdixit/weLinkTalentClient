import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
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
					<tr *ngFor="let application of jobApplications; let i = index" class="text-center">
						<td> {{ application.user.firstName }} {{ application.user.lastName }}</td>
						<td> {{ application.job.company.name }}</td>
						<td> {{ application.job.title }}</td>
						<td> {{ application.availability }}</td>
						<td> {{ application.status }}</td>
						<td>
							<input type="checkbox" class="input-checkbox" [(ngModel)]="applicantContacted[i]"/>
						</td>
						<td>
							<input type="checkbox" class="input-checkbox" [(ngModel)]="applicantReviewed[i]"/>
						</td>
						<td><input type="text" class="form-control" [(ngModel)]="applicantComment[i]"/></td>
						<td> Date</td>
						<td>
							<button (click)="onClickedUpdate(application, applicantContacted[i], applicantReviewed[i], applicantComment[i])">Update</button>
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
	`],
})

export class AdminAllJobsApplicationsComponent implements OnChanges {
	@Input() jobApplications: [JobApplication];
	@Output() isUpdatedEmitter = new EventEmitter<any>();

	applicantContacted = [];
	applicantReviewed = [];
	applicantComment = [];
	constructor() {	}

	ngOnChanges() {
		if (this.jobApplications) {
			this.onLoadJobApplications();
		}
	}

	onLoadJobApplications() {
		let counter: number = 0;
		for (let application of this.jobApplications) {
			this.applicantContacted[counter] = application.contacted;
			this.applicantReviewed[counter] = application.recruiter_reviewed;
			this.applicantComment[counter] = application.recruiter_comment;
			counter++;
		}
	}

	onClickedUpdate(application: JobApplication, contacted: boolean, reviewed: boolean, comment: string) {
		this.isUpdatedEmitter.emit({
			id: application.id,
			data: {
				contacted: contacted,
				recruiter_reviewed: reviewed,
				recruiter_comment: comment
			}
		});
	}
}
