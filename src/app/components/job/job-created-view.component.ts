import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as jobAction from '../../actions/jobs.action';
import { Job } from '../../models/job.model';
import { Router } from '@angular/router';

@Component({
	selector: `app-job-created-view`,
	template: `
		<div class="row">
			<div class="col-md-7">
				<div class="row">
					<div class="col-md-12">
						<h5 class="purple-color">{{ job.title }}</h5>
					</div>
				</div>
				<div class="row">
					<div class="col-md-7">
						<h6 class="gray-color" *ngIf="job.company">{{ job.company.name }}</h6>
					</div>
					<div class="col-md-5 text-right">
						<p>Posted {{ job.createdAt | date: 'yyyy-MM-dd' }}</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<p *ngIf="job.company" class="text-justify">{{ job.company.about }}</p>
					</div>
				</div>
			</div>
			<div class="col-md-5">
				<br/>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-5">
						<button type="button" class="btn btn-primary form-control" (click)="editJobOffer(job)">
							<span translate>Edit</span>
						</button>
					</div>
					<div class="col-md-5">
						<button type="button" class="btn btn-danger form-control" (click)="archiveJobOffer(job)">
							<span translate>Archive</span>
						</button>
					</div>
					<div class="col-md-1"></div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-10 tex-center">
						<div class="text-center application-slots">
							<h2 class="white-color">{{ job.remaining_slots }}</h2>
							<h6 class="white-color">Application Slots Left</h6>
						</div>
					</div>
					<div class="col-md-1"></div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-6">
						<h5>Location:</h5>
						<h5>Job type:</h5>
						<h5>Emp type:</h5>
						<h5>Salary from:</h5>
						<h5>Salary to:</h5>
					</div>
					<div class="col-md-6">
						<h5>{{job.location? job.location : "N/A"}}</h5>
						<h5>Permanent</h5>
						<h5>{{ job.employment_type? job.employment_type : "N/A" }}</h5>
						<h5>{{ job.salary_currency }}{{ job.salary_from }}</h5>
						<h5>{{ job.salary_currency }}{{ job.salary_to }}</h5>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-1"></div>
					<div class="col-md-10">
						<div class="read-more-link text-center">
							<a class="white-color" routerLink="/jobs/{{ job._id }}"><h4>Read More</h4></a>
						</div>
					</div>
					<div class="col-md-1"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<hr/>
			</div>
		</div>
	`,
	styles: [`
		.read-more-link {
			width: 100%;
			padding-top: 10px;
			padding-bottom: 10px;
			background: #57148D;
		}
		.application-slots {
			width: 100%;
			padding-top: 10px;
			padding-bottom: 10px;
			background: #58595b;
		}
	`],
})

export class JobCreatedViewComponent {
	@Input() job: Job;

	constructor(private store: Store<fromRoot.State>, private router: Router) {}

	editJobOffer(selectedJob: Job): void {
		this.router.navigate(['admin/edit-job/' + selectedJob._id]);
	}

	archiveJobOffer(job: Job): void {
		this.store.dispatch(new jobAction.JobArchiveAction(job));
	}
}
