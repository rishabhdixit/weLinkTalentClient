import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { JobApplication } from '../models/job-application.model';
// import { Response } from '@angular/http'; // commented not used
import 'rxjs/Rx';

@Component({
	selector: `app-admin-all-jobs-applications`,
	template: `
		<div class="row">
			<table class="table table-bordered">
				<thead>
					<tr class="text-center">
						<th class="text-center width_100">Company</th>
						<th class="text-center width_100">Job Title</th>
						<th class="text-center width_100">Candidate Name</th>
						<th class="text-center width_20">Contacted</th>
						<th class="text-center width_20">Reviewed</th>
						<th class="text-center width_250">Comment</th>
						<th class="text-center width_40">Creation Date</th>
						<th class="text-center width_20">Action</th>
						<th class="text-center width_20">More</th>
					</tr>
				</thead>
				<tbody>
					<tr *ngFor="let application of jobApplications; let i = index" class="text-center">
						<td class="word-wrap">{{ application.job.company.name }}</td>
						<td class="word-wrap">{{ application.job.title }}</td>
						<td class="word-wrap">
							<a routerLink="/job-application/{{application._id}}" class="purple-color">
								{{ application.user.firstName }} {{ application.user.lastName }}
							</a>
						</td>
						<td>
							<input type="checkbox" [(ngModel)]="applicantContacted[i]"/>
						</td>
						<td>
							<input type="checkbox" [(ngModel)]="applicantReviewed[i]"/>
						</td>
						<td class="word-wrap">
							<input type="text" class="form-control" [(ngModel)]="applicantComment[i]"/>
						</td>
						<td class="word-wrap">{{ application.createdAt | date: 'yyyy-mm-dd' }}</td>
						<td>
							<button (click)="onClickedUpdate(application, applicantContacted[i], applicantReviewed[i], applicantComment[i])">Update</button>
						</td>
						<td class="word-wrap">
							<a routerLink="/applicants/{{application.user._id}}/application/{{application.id}}" class="purple-color">read more</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	`,
	styles: [``],
})

export class AdminAllJobsApplicationsComponent implements OnChanges {
	@Input() jobApplications: [JobApplication];
	@Output() isUpdatedEmitter = new EventEmitter<any>();

	applicantContacted = [];
	applicantReviewed = [];
	applicantComment = [];

	constructor() {}

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
