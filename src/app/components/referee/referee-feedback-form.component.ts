import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RefereeFeedback } from '../../models/referee-feedback.model';
import { JobApplication } from '../../models/job-application.model';

@Component({
	selector: `app-referee-feedback-form`,
	template: `		
		<form [formGroup]="refereeFeedbackForm">
			<div class="col-md-12">
				<h2>Referee Comments:</h2>
				<p class="pStyle">This section contains what your referee has filled.</p>
				<div class="form-group" style="margin-top: 45px; margin-bottom: .5rem;">
					<textarea class="form-control" rows="4" formControlName="reasonForLeavingFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="reasonForLeavingApproved"/>
						I APPROVE
					</label>
				</div>
				<div class="col-md-12 div-padding">
					<p class="skillStyle">Rate the candidate's skills accordingly.</p>
					<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
					
					<div class="form-group star-margin" formArrayName="skillRatings" *ngFor="let skill of skillRatings.controls; let i=index;">
						<div [formGroupName]="i">
							<app-reactive-star
								[skill]="skill.controls.name.value"
								[listIndex]="i"
								(newRating)="onClickNewRating($event)"
								>
							</app-reactive-star>
						</div>
					</div>
					
				</div>
				<div class="form-group" style="margin-top: 50px;">
					<textarea class="form-control" rows="4" formControlName="strengthFeedback" required > </textarea>
					<label>
						<input type="checkbox" formControlName="strengthApproved"/>
					 	I APPROVE
					</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="improvementFeedback" required > </textarea>
					<label>
						<input type="checkbox" formControlName="improvementApproved"/>
						I APPROVE
					</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="achievementFeedback" required > </textarea>
					<label>
						<input type="checkbox" formControlName="achievementApproved"/>					
						I APPROVE
					</label>
				</div>
				<div class="form-group" style="margin-top: 37px;">
					<textarea class="form-control" rows="4" formControlName="managementStyleFeedback" required > </textarea>
					<label>
						<input type="checkbox" formControlName="managementStyleApproved"/>						
						I APPROVE
					</label>
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

export class RefereeFeedbackFormComponent implements OnInit {
	@Input() jobApplication: JobApplication;
	@Output() submitRefereeFeedbackEvent = new EventEmitter<RefereeFeedback>();

	refereeFeedbackForm: FormGroup;

	constructor(public fb: FormBuilder) {
	}

	ngOnInit() {
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
			skillRatings: this.fb.array(this.jobApplication.form_data.skills.map((skill) => this.skillRatingFormGroup(skill))),
		});
	}

	get skillRatings(): FormArray {
		return <FormArray>this.refereeFeedbackForm.get('skillRatings');
	}

	skillRatingFormGroup(skill: any) {
		let skillRatingGP = this.fb.group({
			name: skill.name,
			rate: -10,
		});

		return skillRatingGP;
	}

	submitButtonClicked() {
		const refereeFeedback = this.refereeFeedbackForm.value;
		this.submitRefereeFeedbackEvent.emit(refereeFeedback);
	}

	onClickNewRating(rate: any) {
		this.refereeFeedbackForm.controls.skillRatings.get(rate.index + '.rate').setValue(rate.value);
	}
}
