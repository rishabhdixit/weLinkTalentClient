import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { RefereeFeedback } from '../../models/referee-feedback.model';
import { JobApplication } from '../../models/job-application.model';
import { User } from '../../models/user.model';

const emptyRating: number = -10;
@Component({
	selector: 'app-referee-feedback',
	template: `
		<form [formGroup]="refereeFeedbackForm">
			<div class="row">
				<div class="col-md-6 text-center gColor">
				<br/><br/>
					<h5>Applicant's Applications Details:</h5>
					<p>This section contains what the applicant have filled previously.</p>
				</div>
				<div class="col-md-6 text-center vColor">
					<br/><br/>
					<h5>Referee Feedback Details:</h5>
					<p>This section will contain your feedback to the applicant.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<br/><br/>
						<label for="reasonForLeaving" class="labelStyle">Reason for leaving the current company:</label>
						<textarea class="form-control" id="reasonForLeaving" name="reasonForLeaving" rows="5" 
											[(ngModel)]="applicationDetail.form_data.reasonForLeaving"
											[ngModelOptions]="{ standalone: true}" required readonly></textarea>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group" style="margin-top: 1.5%">
					<br/><br/><br/>
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="reasonForLeavingFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="reasonForLeavingApproved"/>
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<p class="labelStyle">Applicant's Personal Scoring to his/her skills:</p>
						<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
						<div class="form-group" *ngFor="let skill of applicationDetail.form_data.skills">
							<div class="row">
								<div class="col-md-5">
									<p>{{ skill.name }}</p>
								</div>
								<div class="col-md-7">
									<ng-container *ngFor="let count of [0,1,2,3,4]">
										<i [ngClass]="getClass(count, skill.rate)"></i>
									</ng-container>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="col-md-12">
						<p class="labelStyle">Rate the candidate's skills accordingly.</p>
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
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Management</h6>
						<ul class="list-unstyled">
							<li *ngFor="let manage of management">
								<input type="radio" class="input-radio" value="{{ manage.value }}" 
												[(ngModel)]="applicationDetail.form_data.management" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ manage.value }}</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="managementFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="managementApproved"/>
					 		I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Leadership</h6>
						<ul class="list-unstyled">
							<li *ngFor="let lead of leadership">
								<input type="radio" class="input-radio" value="{{ lead.value }}" 
												[(ngModel)]="applicationDetail.form_data.leadership" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ lead.value }}</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="leadershipFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="leadershipApproved"/>
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Self-Management</h6>
						<ul class="list-unstyled">
							<li *ngFor="let selfManage of self_management">
								<input type="radio" class="input-radio" value="{{ selfManage.value }}" 
											[(ngModel)]="applicationDetail.form_data.selfManagement" 
											[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ selfManage.value }}</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="selfManagementFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="selfManagementApproved"/>					
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Relationships</h6>
						<ul class="list-unstyled">
							<li *ngFor="let relation of relationship">
								<input type="radio" class="input-radio" value="{{ relation.value }}" 
												[(ngModel)]="applicationDetail.form_data.relationship" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ relation.value }}</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="relationshipFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="relationshipApproved"/>						
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Analytical</h6>
						<ul class="list-unstyled">
							<li *ngFor="let analytic of analytics">
								<input type="radio" class="input-radio" value="{{ analytic.value }}" 
											[(ngModel)]="applicationDetail.form_data.analytical" 
											[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ analytic.value }}</label>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="analyticalFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="analyticalApproved"/>						
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>Why are you best fit for this job</h6>
						<textarea class="form-control" id="fitToJobReason" name="fitToJobReason" rows="5" 
											[(ngModel)]="applicationDetail.form_data.fitToJobReason"
											[ngModelOptions]="{ standalone: true}" readonly></textarea>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group">
						<br/>
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="fitToJobReasonFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="firToJobReasonApproved"/>						
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor">
					<div class="form-group">
						<h6>What are the achievements related to this job you are the proudest of?</h6>
						<textarea class="form-control" id="jobRelatedAchievements" name="jobRelatedAchievements" rows="5" 
											[(ngModel)]="applicationDetail.form_data.jobRelatedAchievements" 
											[ngModelOptions]="{ standalone: true}" readonly></textarea>
					</div>
				</div>
				<div class="col-md-6 vColor">
					<div class="form-group" style="margin-top: 1.5">
						<br/>
						<textarea class="form-control" rows="5" placeholder="Comment..." formControlName="relatedAchievementFeedback" required> </textarea>
						<label>
							<input type="checkbox" formControlName="relatedAchievementApproved"/>						
							I APPROVE
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor"></div>
				<div class="col-md-6 vColor">
					<p>Do you agree that the candidate is qualified in skills and personality in doing this role?</p>
					<ng-container *ngFor="let num of [0, 1, 2, 3, 4]">
						<i 	(mouseover)="onMouseOver(num)" 
							 	(mouseleave)="onMouseLeave(num)"
							 	(click)="isClicked(num)"
							 	[class.highlight]="isHighlighted(num)"
							 	class="fa fa-star fa-2x star"></i>
					</ng-container>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor"></div>
				<div class="col-md-6 vColor">
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
			<div class="row">
				<div class="col-md-6 gColor"></div>
				<div class="col-md-6 vColor">
					<br/>
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
					<br/><br/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 gColor"></div>
				<div class="col-md-6 vColor text-right nextButton">
				<br/>
					<button class="btn btn-primary" (click)="submitButtonClicked()">Submit Feedback</button>
				<br/><br/>
				</div>
			</div>
		</form>
	`,
	styles: [`
		.gColor {
			background: lightgray;
		}
		.vColor {
			background: #e6c5ff;
		}
		.labelStyle {
			color: #4D308E;
			font-weight: 700;
		}
		h6 {
			color: #57148D;
		}
		.input-checkbox {
			width: 1.2em;
			height: 1.2em;
		}
		.nextButton {
			text-align: start;
			float: right;
			margin-top: -38px;
		}
		h2 {
			text-align: center;
			color: #4D308E;
		}
		.star-margin {
			margin-bottom: 15px;
		}
		.nextButton {
			text-align: start;
			float: right;
			margin-top: -38px;
		}
		.star {
			color: white;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.star:hover {
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
		.color-yellow {
			color: yellow;
		}
		i {
			cursor:pointer;
			color: white;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	`]
})

export class RefereeFeedbackComponent implements OnInit {
	@Input() jobApplication: JobApplication;
	@Input() applicationDetail: JobApplication;
	@Output() submitRefereeFeedbackEvent = new EventEmitter<RefereeFeedback>();
	refereeFeedbackForm: FormGroup;

	@Input() noOfStars: number = 5;
	@Input() currRating: number = emptyRating;
	rating: number = emptyRating;
	clicked: boolean = false;

	unHireCandidate: boolean;
	canBeContact: boolean;
	user: User;

	management: Array<any> = [
		{ id: 0, value: 'Delegation & Performance Management' },
		{ id: 1, value: 'Project/Process Management' },
		{ id: 2, value: 'Managing Execution' },
		{ id: 3, value: 'Coaching & Developing Talent' },
		{ id: 4, value: 'Managing Difference/Conflict'}
	];
	leadership: Array<any> = [
		{ id: 0, value: 'Strategic Thinking' },
		{ id: 1, value: 'Business Acumen' },
		{ id: 2, value: 'Leading Courageously' },
		{ id: 3, value: 'Inspiring Others' },
		{ id: 4, value: 'Integrity, Trust & Credibility' }
	];
	self_management: Array<any> = [
		{ id: 0, value: 'Learning Agility / Development' },
		{ id: 1, value: 'Initiative & Risk Taking' },
		{ id: 2, value: 'Drive for Results' },
		{ id: 3, value: 'Adaptability Management' },
		{ id: 4, value: 'Emotional Resilience' }
	];
	relationship: Array<any> = [
		{ id: 0, value: 'Communication & Influencing' },
		{ id: 1, value: 'Interpersonal Skills' },
		{ id: 2, value: 'Teamwork & Team Building' },
		{ id: 3, value: 'Customer Focus' },
		{ id: 4, value: 'Cross-Cultural Agility' }
	];
	analytics: Array<any> = [
		{ id: 0, value: 'Problem Solving' },
		{ id: 1, value: 'Critical Thinking' },
		{ id: 2, value: 'Decision Making' },
		{ id: 3, value: 'Innovation' },
		{ id: 4, value: 'Professional Expertise' }
	];

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

	getClass(count, rate) {
		if (count < rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x ';
		}
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
