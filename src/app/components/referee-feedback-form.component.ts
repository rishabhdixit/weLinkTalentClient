import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RefereeFeedback } from '../models/referee-feedback.model';
import { JobApplication } from '../models/job-application.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-referee-feedback-form`,
	template: `		
		<form #refereeForm="ngForm">
			<div class="col-md-12">
				<h2>Referee Comments:</h2>
				<p class="pStyle">This section contains what your referee has filled.</p>
				<div class="form-group" style="margin-top: 45px;">
					<textarea class="form-control" rows="4" [(ngModel)]="feedback.reasonForLeavingFeedback"></textarea>
					<input type="checkbox" [(ngModel)]="feedback.reasonForLeavingApproved" /><label>APPROVE</label>
				</div>
				<div class="col-md-12 div-padding">
					<p class="skillStyle">Rate the candidate's skills accordingly.</p>
					<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
					<div class="form-group star-margin" *ngFor="let skill of job.skills">
						<!--<input type="text" class="input-style" value="{{skill}}" />-->
						<ul class="list-unstyled">
							<app-stars style="font-size: x-large;"></app-stars>
						</ul>
					</div>
				</div>
				<div class="form-group" style="margin-top: 50px;">
					<textarea class="form-control" rows="4" [(ngModel)]="feedback.strengthFeedback"></textarea>
					<input type="checkbox" [(ngModel)]="feedback.strengthApproved"/><label>APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" [(ngModel)]="feedback.improvementFeedback"></textarea>
					<input type="checkbox" [(ngModel)]="feedback.improvementApproved"/><label>APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" [(ngModel)]="feedback.achievementFeedback"></textarea>
					<input type="checkbox" [(ngModel)]="feedback.improvementApproved"/><label>APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" [(ngModel)]="feedback.managementStyleFeedback"></textarea>
					<input type="checkbox" [(ngModel)]="feedback.managementStyleApproved"/><label>APPROVE</label>
				</div>
				<div>
					<div class="col-md-2">
					</div>
					<div class="col-md-8 nextButton">
						<button class="btn btn-primary" (click)="submitButtonClicked()">Submit Feedback</button>
					</div>
					<div class="col-md-2">
					</div>
				</div>
				<div>
					<p></p>
				</div>
			</div>
		</form>
	`,
	styles: [`
		.div-padding {
			margin-top: 15px;
			padding-left: 0;
			padding-right: 0;
		}
		h2 {
			text-align: center;
			color: #4D308E;
		}
		.pStyle {
			font-size: smaller;
			text-align: center;
			color: dimgray;
		}
		.skillStyle {
			color: #4D308E;
			font-weight: 700;
			margin-bottom: 0;
		}
		.div-margin {
			margin-top: 45px;
			margin-bottom: 0;
		}
		.star-margin {
			margin-bottom: 15px;
		}
		.nextButton {
			text-align: start;
			float: right;
			margin-top: -38px;
		}
	`],
})

export class RefereeFeedbackFormComponent {
	@Input() jobApplication: JobApplication;
	@Input() job: Job;

	@Output() submitRefereeFeedbackEvent = new EventEmitter<RefereeFeedback>();

	feedback: RefereeFeedback = new RefereeFeedback();
	constructor() { }

	submitButtonClicked() {
		this.submitRefereeFeedbackEvent.emit(this.feedback);
	}
}
