import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { RefereeFeedback } from '../models/referee-feedback.model';
import { JobApplication } from '../models/job-application.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-referee-feedback-form`,
	template: `		
		<form [formGroup]="refereeFeedbackForm">
			<div class="col-md-12">
				<h2>Referee Comments:</h2>
				<p class="pStyle">This section contains what your referee has filled.</p>
				<div class="form-group" style="margin-top: 45px; margin-bottom: .5rem;">
					<textarea class="form-control" rows="4" formControlName="reasonForLeavingFeedback" required></textarea>
					<input type="checkbox" formControlName="reasonForLeavingApproved" (click)="reasonForLeavingApproved=onClick()"/>
					<label> I APPROVE</label>
				</div>
				<div class="col-md-12 div-padding">
					<p class="skillStyle">Rate the candidate's skills accordingly.</p>
					<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
					<div class="form-group star-margin" *ngFor="let skill of jobApplication.form_data.skills">
						
					</div>
				</div>
				<div class="form-group" style="margin-top: 50px;">
					<textarea class="form-control" rows="4" formControlName="strengthFeedback" required></textarea>
					<input type="checkbox" formControlName="strengthApproved" (click)="strengthApproved=onClick()"/>
					<label> I APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="improvementFeedback" required></textarea>
					<input type="checkbox" formControlName="improvementApproved" (click)="improvementApproved=onClick()"/>
					<label> I APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="achievementFeedback" required></textarea>
					<input type="checkbox" formControlName="achievementApproved" (click)="achievementApproved=onClick()"/>
					<label> I APPROVE</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="managementStyleFeedback" required></textarea>
					<input type="checkbox" formControlName="managementStyleApproved" (click)="managementStyleApproved=onClick()"/>
					<label> I APPROVE</label>
				</div>
				<div>
					<div class="col-md-2">
					</div>
					<div class="col-md-6 nextButton">
						<button class="btn btn-primary" (click)="submitButtonClicked()">Submit Feedback</button>
					</div>
					<div class="col-md-2">
					</div>
				</div>
			</div>
		</form>
	`,
	styles: [`
		.div-padding {
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

	refereeFeedbackForm: FormGroup;

	constructor(public fb: FormBuilder) {
		this.refereeFeedbackForm = this.fb.group({
			reasonForLeavingFeedback: '',
			reasonForLeavingApproved: false,
			strengthFeedback: '',
			strengthApproved: false,
			improvementFeedback: '',
			improvementApproved: false,
			achievementFeedback: '',
			achievementApproved: false,
			managementStyleFeedback: '',
			managementStyleApproved: false,
		});
	}

	submitButtonClicked() {
		const refereeFeedback = this.refereeFeedbackForm.value;
		this.submitRefereeFeedbackEvent.emit(refereeFeedback);
	}

	onClick() {
		return true;
	}

}
