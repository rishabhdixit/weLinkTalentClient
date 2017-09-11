import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { RefereeFeedback } from '../../models/referee-feedback.model';
import { JobApplication } from '../../models/job-application.model';
import { User } from '../../models/user.model';

const emptyRating: number = -10;
@Component({
	selector: `app-referee-feedback-form`,
	template: `
		<form [formGroup]="refereeFeedbackForm">
			<div class="col-md-12">
				<br/>
				<br/>
				<h1>Reference</h1>
				<br/><br/>
				<div class="form-group" style="margin-bottom: .5rem; margin-top: 9px;">
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
								(newRating)="onClickNewRating($event)">
							</app-reactive-star>
						</div>
					</div>
				</div>
				<div class="form-group" style="margin-top: 50px;">
					<textarea class="form-control" rows="5" formControlName="managementFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="managementApproved"/>
					 	I APPROVE
					</label>
				</div>
				<br/><br/>
				<div class="form-group" style="margin-top: 5px;">
					<textarea class="form-control" rows="5" formControlName="leadershipFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="leadershipApproved"/>
						I APPROVE
					</label>
				</div>
				<br/><br/>
				<div class="form-group" style="margin-top: 8px;">
					<textarea class="form-control" rows="5" formControlName="selfManagementFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="selfManagementApproved"/>					
						I APPROVE
					</label>
				</div>
				<br/><br/>
				<div class="form-group" style="margin-top: 12px;">
					<textarea class="form-control" rows="5" formControlName="relationshipFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="relationshipApproved"/>						
						I APPROVE
					</label>
				</div>
				<br/><br/>
				<div class="form-group" style="margin-top: 8px;">
					<textarea class="form-control" rows="5" formControlName="analyticalFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="analyticalApproved"/>						
						I APPROVE
					</label>
				</div>
				<br/><br/><br/>
				<div class="form-group" style="margin-top: 10px;">
					<textarea class="form-control" rows="5" formControlName="fitToJobReasonFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="firToJobReasonApproved"/>						
						I APPROVE
					</label>
				</div>
				<br/>
				<div class="form-group" style="margin-top: 15px;">
					<textarea class="form-control" rows="5" formControlName="relatedAchievementFeedback" required> </textarea>
					<label>
						<input type="checkbox" formControlName="relatedAchievementApproved"/>						
						I APPROVE
					</label>
				</div>
				<br/><br/>
				<div class="row">
					<div class="col-md-12">
						<p>Do you agree that the candidate is qualified in skills and personality in doing this role?</p>
						<ng-container *ngFor="let num of [0, 1, 2, 3, 4]">
							<i (mouseover)="onMouseOver(num)" 
							   (mouseleave)="onMouseLeave(num)"
							   (click)="isClicked(num)"
							   [class.highlight]="isHighlighted(num)"
							   class="fa fa-star fa-2x"></i>
						</ng-container>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<p>Would you rehire the candidate?</p>
						<div class="form-inline">
							<input type="checkbox"
								class="form-control input-checkbox"
								(change)="checkHireCandidate('Yes')"
								formControlName="hireCandidate"/>
							<label class="labelWeight">&emsp;Yes&emsp;</label>
							<input type="checkbox"
								[(ngModel)]="unHireCandidate"
								[ngModelOptions]="{standalone: true}"
								class="form-control input-checkbox"
								(change)="checkHireCandidate('No')"/>
							<label class="labelWeight">&emsp;No&emsp;</label>
						</div>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<p>The hiring manager might need to contact you for additional questions. Please confirm your acceptance:</p>
						<div class="form-inline">
							<input type="checkbox"
								class="form-control input-checkbox"
								(change)="checkCanBeContact('Yes')"
								formControlName="canBeContact"/>
							<label class="labelWeight">&emsp;Yes&emsp;</label>
							<input type="checkbox"
								class="form-control input-checkbox"
								[(ngModel)]="canBeContact"
								[ngModelOptions]="{standalone: true}"
								(change)="checkCanBeContact('No')"/>
							<label class="labelWeight">&emsp;No&emsp;</label>
						</div>
					</div>
				</div>
				<br/>
				<br/>
				<div class="row">
					<div class="col-md-12 text-right nextButton">
						<button class="btn btn-primary" (click)="submitButtonClicked()">Submit Feedback</button>
					</div>
				</div>
				<br/>
			</div>
		</form>
	`,
	styles: [`
		.div-padding {
			padding-left: 0;
			padding-right: 0;
		}
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
		}
		h2 {
			text-align: center;
			color: #4D308E;
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
		i {
			color: white;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		i:hover {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.highlight {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.input-checkbox {
			width: 1.2em;
			height: 1.2em;
		}
	`],
})

export class RefereeFeedbackFormComponent implements OnInit, OnChanges {
	@Input() jobApplication: JobApplication;
	@Output() submitRefereeFeedbackEvent = new EventEmitter<RefereeFeedback>();

	refereeFeedbackForm: FormGroup;

	@Input() noOfStars: number = 5;
	@Input() currRating: number = emptyRating;
	rating: number = emptyRating;
	clicked: boolean = false;

	unHireCandidate: boolean;
	canBeContact: boolean;
	user: User;

	constructor(public fb: FormBuilder) {	}

	ngOnInit() {
		this.refereeFeedbackForm = this.fb.group({
			reasonForLeavingFeedback: new FormControl('', [Validators.required]),
			reasonForLeavingApproved: new FormControl(false, [Validators.required]),
			managementFeedback: new FormControl('', [Validators.required]),
			managementApproved: new FormControl(false, [Validators.required]),
			leadershipFeedback: new FormControl('', [Validators.required]),
			leadershipApproved: new FormControl(false, [Validators.required]),
			selfManagementFeedback: new FormControl('', [Validators.required]),
			selfManagementApproved: new FormControl(false, [Validators.required]),
			relationshipFeedback: new FormControl('', [Validators.required]),
			relationshipApproved: new FormControl(false, [Validators.required]),
			analyticalFeedback: new FormControl('', [Validators.required]),
			analyticalApproved: new FormControl(false, [Validators.required]),
			fitToJobReasonFeedback: new FormControl('', [Validators.required]),
			firToJobReasonApproved: new FormControl(false, [Validators.required]),
			relatedAchievementFeedback: new FormControl('', [Validators.required]),
			relatedAchievementApproved: new FormControl(false, [Validators.required]),
			skillRatings: this.fb.array(this.jobApplication.form_data.skills.map((skill) => this.skillRatingFormGroup(skill))),
			candidateRate: new FormControl(null, [Validators.required]),
			hireCandidate: new FormControl(false, [Validators.required]),
			canBeContact: new FormControl(false, [Validators.required]),
		});

		if (this.noOfStars > 0) {
			if (this.currRating !== emptyRating) {
				this.rating = this.currRating - 1;
				this.clicked = true;
			}
		}
	}

	ngOnChanges(): void {	}

	checkHireCandidate(value: string): void {
		if (value === 'Yes') {
			if (this.refereeFeedbackForm.get('hireCandidate').value) {
				this.unHireCandidate = false;
			} else {
				this.unHireCandidate = true;
			}
		} else {
			if (this.unHireCandidate) {
				this.refereeFeedbackForm.get('hireCandidate').setValue(false);
			} else {
				this.refereeFeedbackForm.get('hireCandidate').setValue(true);
			}
		}
	}

	checkCanBeContact(value: string): void {
		if (value === 'Yes') {
			if (this.refereeFeedbackForm.get('canBeContact').value) {
				this.canBeContact = false;
			} else {
				this.canBeContact = true;
			}
		} else {
			if (this.canBeContact) {
				this.refereeFeedbackForm.get('canBeContact').setValue(false);
			} else {
				this.refereeFeedbackForm.get('canBeContact').setValue(true);
			}
		}
	}

	onMouseOver(index: number) {
		if (this.rating > emptyRating) {
			return false;
		}

		this.rating = index;
	}

	onMouseLeave() {
		if (!this.clicked) {
			this.rating = emptyRating;
		}
	}

	isHighlighted(index: number) {
		if (this.rating > index - 1) {
			return true;
		}
		return false;
	}

	isClicked(index: number) {
		if (index === this.rating && this.clicked) {
			this.rating = emptyRating;
			this.clicked = false;
			return false;
		}
		this.clicked = true;
		this.rating = index;
		// this.newRating.emit(this.rating);
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
		this.refereeFeedbackForm.get('candidateRate').setValue(this.rating + 1);
		const refereeFeedback = this.refereeFeedbackForm.value;
		this.submitRefereeFeedbackEvent.emit(refereeFeedback);
	}

	onClickNewRating(rate: any) {
		this.skillRatings.get(rate.index + '.rate').setValue(rate.value);
	}
}
