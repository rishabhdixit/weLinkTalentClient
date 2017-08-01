import { Component, Input } from '@angular/core';

import { JobsApplied } from '../../models/jobs-applied.model';

@Component({
	selector: 'app-jobs-applied-view',
	template: `
		<div class="row">
			<!--<div class="col-md-1">
				{{((currentPage - 1) * 10) + counter + 1}}
			</div>-->
			<div class="col-md-4">
				<h5 *ngIf="jobsApplied.title"><a routerLink="/job-application/{{jobsApplied.id}}">{{jobsApplied.title}}</a></h5>
				<h6 *ngIf="jobsApplied.company" style="color: #6F7071;">{{jobsApplied.company.name}}</h6>
			</div>
			<div class="col-md-2">
				<div class="row">
						<div class="col-md-4 text-center">
							<i [ngClass]="getReferenceStatusClass(jobsApplied.reference_status, 0)"></i>
						</div>
						<div class="col-md-4 text-center">
							<i [ngClass]="getReferenceStatusClass(jobsApplied.reference_status, 1)"></i>
						</div>
						<div class="col-md-4 text-center">
							<i [ngClass]="getReferenceStatusClass(jobsApplied.reference_status, 2)"></i>
						</div>
				</div>
			</div>
			<div class="col-md-1"></div>
			<div class="col-md-2">
				<div class="row">
					<div class="col-md-4 text-center">
						<i [ngClass]="getApplicationStatusClass(jobsApplied.application_status, 0)"></i>
					</div>
					<div class="col-md-4 text-center">
						<i [ngClass]="getApplicationStatusClass(jobsApplied.application_status, 1)"></i>
					</div>
					<div class="col-md-4 text-center">
						<i [ngClass]="getApplicationStatusClass(jobsApplied.application_status, 2)"></i>
					</div>
				</div>
			</div>
			<div class="col-md-3">
				<button
					*ngIf="isAbleToSendRequestFeedback(jobsApplied.reference_status, jobsApplied.application_status)"
					type="button"
					class="btn btn-primary"
					(click)="sendRequestFeedbackFromRecruiter(jobsApplied)">
					Request feedback from recruiter
				</button>
				<button
					*ngIf="isAbleToApply(jobsApplied.reference_status, jobsApplied.application_status)"
					type="button"
					class="btn btn-primary"
					(click)="applyToJob(jobsApplied)">
					Apply
				</button>
			</div>
		</div>
		<br/>
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

	isAbleToSendRequestFeedback(referenceStatus: string, applicationStatus: string): boolean {
		return referenceStatus === 'approved' && applicationStatus === 'submitted';
	}

	isAbleToApply(referenceStatus: string, applicationStatus: string): boolean {
		return referenceStatus === 'approved' && applicationStatus === 'completed';
	}

	sendRequestFeedbackFromRecruiter(jobApplied: JobsApplied): void {
		console.log('Sending request feedback to recruiter...');
	}

	applyToJob(jobApplied: JobsApplied): void {
		console.log('Applying to job...');
	}

	getReferenceStatusClass(status: string, index: number): string {
		if (index === 0) {
			if (status === 'sent' || status === 'replied' || status === 'approved') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else if (index === 1) {
			if (status === 'replied' || status === 'approved') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else if (index === 2) {
			if (status === 'approved') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else {
			return this.getInActiveClass();
		}
	}

	getApplicationStatusClass(status: string, index: number): string {
		if (index === 0) {
			if (status === 'completed' || status === 'submitted' || status === 'reviewed') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else if (index === 1) {
			if (status === 'submitted' || status === 'reviewed') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else if (index === 2) {
			if (status === 'reviewed') {
				return this.getActiveClass();
			} else {
				return this.getInActiveClass();
			}
		} else {
			return this.getInActiveClass();
		}
	}

	private getActiveClass(): string {
		return 'fa fa-circle fa-lg purple-color';
	}

	private getInActiveClass(): string {
		return 'fa fa-circle-o fa-lg';
	}
}
