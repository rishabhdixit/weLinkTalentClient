import { Component, Input, OnInit, EventEmitter, Output, Pipe, Inject } from '@angular/core';
import { Job } from '../../models/job.model';
import { JobApplication } from '../../models/job-application.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
	selector: 'app-candidate-job-application-form-page',
	template: `
		<form [formGroup]="applicationForm">
			<div class="row">
				<div class="col-md-12">
					<h2>Talent Application Form</h2>
					<p class="job-detail">{{job.title}} - {{job.company.name}}</p>
					<p style="text-align:center; font-size:small; color:darkgray; margin-bottom:5px;">
						This application is confidential. Please contact us at talent@welinktalent.com for any questions regarding this form.
					</p>
					<div *ngIf="!isApplicationFormValid" class="row">
						<br/>
						<div class="col-md-12">
							<div class="form-group">
								<p class="alert alert-danger form-control" autofocus>Please make sure all required fields are fill out!</p>
							</div>
						</div>
						<br/>
					</div>
					<div class="form-group">
						<input type="file" class="form-control" id="file" name="file" (change)="onFileUpload($event)" multiple required>
					</div>
					<div class="form-group">
						<label for="reasonForLeaving" class="labelStyle">Reason for leaving the current company:</label>
						<textarea class="form-control"
						          id="reasonForLeaving"
						          name="reasonForLeaving"
						          rows="5"
						          placeholder="reasons for leaving company..."
											formControlName="reasonForLeaving" required>
						</textarea>
						<div *ngIf="applicationForm.get('reasonForLeaving').touched && applicationForm.get('reasonForLeaving').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<p class="labelStyle">Expected Salary:</p>
							<div class="row">
								<div class="col-md-6">
									<label for="basePerMonth">Base per month:<i class="red-color"> * </i></label>
									<div class="row">
										<div class="col-md-4">
											<select class="form-control" name="basePerMonthCurrency" formControlName="basePerMonthCurrency">
												<option *ngFor="let currency of currencies" value="{{currency}}">{{currency}}</option>
											</select>
										</div>
										<div class="col-md-8">
											<input type="number"
											       min="0"
											       onkeypress="return event.charCode >= 48"
											       class="form-control"
											       id="basePerMonth"
											       placeholder="Base Pay / Month"
											       formControlName="basePerMonth" required/>
											<div *ngIf="applicationForm.get('basePerMonth').touched && applicationForm.get('basePerMonth').invalid"
											     class="alert alert-danger form-control">Please fill out this field!</div>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<label for="bonus">Bonus:<i class="red-color"> * </i></label>
									<div class="row">
										<div class="col-md-4">
											<select class="form-control" name="basePerMonthCurrency" formControlName="bonusCurrency">
												<option *ngFor="let currency of currencies" value="{{currency}}">{{currency}}</option>
											</select>
										</div>
										<div class="col-md-8">
											<input type="number"
											       min="0"
											       onkeypress="return event.charCode >= 48"
											       class="form-control"
											       id="bonus"
											       placeholder="Bonus"
											       formControlName="bonus" required/>
											<div *ngIf="applicationForm.get('bonus').touched && applicationForm.get('bonus').invalid"
											     class="alert alert-danger form-control">Please fill out this field!</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br/>
					<div class="col-md-12 div-padding">
						<p class="skillStyle">Please score yourself accordingly for the skills listed below.</p>
						<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
						<div class="form-group" *ngFor="let skill of job.skills; let i=index">
							<app-stars [skill]="skill"
							           [application]="application"
							           [index]="i"
							           ngDefaultControl>
							</app-stars>
						</div>
					</div>
					<div class="form-group">
						<label for="strengths" class="labelStyle">What are your strengths?<i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5" id="strengths"
						          name="strengths"
						          placeholder="What are your strengths?"
						          formControlName="strength" required>
						</textarea>
						<div *ngIf="applicationForm.get('strength').touched && applicationForm.get('strength').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="points" class="labelStyle">What are your points for development/improvement?<i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5"
						          id="points"
						          name="points"
						          placeholder="What are your points for development/improvement?"
						          formControlName="improvements" required>
						</textarea>
						<div *ngIf="applicationForm.get('improvements').touched && applicationForm.get('improvements').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="achievements" class="labelStyle">What are your main achievements?<i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5"
						          id="achievements"
						          name="achievements"
						          placeholder="What are your main achievements?"
						          formControlName="achievements" required>
						</textarea>
						<div *ngIf="applicationForm.get('achievements').touched && applicationForm.get('achievements').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="management" class="labelStyle">What is your management style?<i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5"
						          id="management"
						          name="managements"
						          placeholder="What is your management style?"
						          formControlName="management" required>
						</textarea>
						<div *ngIf="applicationForm.get('management').touched && applicationForm.get('management').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div *ngIf="!forReference" class="button-class">
						<button type="submit" class="btn btn-primary btn-lg btnApply" (click)="onApplyClick()">Apply</button>
					</div>
				</div>
			</div>
		</form>
	`,
	styles: [`
		h2 {
			text-align: center;
			color: #57148D;
		}
		.div-padding {
			padding-left: 0;
			padding-right: 0;
		}
		.label-margin {
			margin-top: 6px;
			font-weight: bolder;
		}
		.bonusLabel {
			float: right;
			margin-top: -48px;
			margin-right: 265px;
			font-weight: bolder;
		}
		.button-class {
			text-align: center;
		}
		.labelStyle {
			color: #57148D;
			font-weight: 700;
		}
		.skillStyle {
			color: #57148D;
			font-weight: 700;
			margin-bottom: 0;
		}
		.ulStyle {
			float: right;
			margin-right: 40%;
			margin-bottom: 0;
		}
		i:hover{
			cursor:pointer;
		}
		.job-detail {
			margin-bottom: 5px;
			text-align: center;
			font-size: x-large;
			color: dimgray;
		}
		.inputBonus {
			width: 260px;
			float: right;
			margin-top: -54px;
		}
		.inputBase {
			width: 260px;
			float: right;
			margin-right: 460px
		}
		input.currency {
			text-align: right;
			padding-right: 15px;
		}
		.btnApply {
			border-radius: 0;
			background: #57148D;
		}
	`],
})

export class CandidateJobApplicationFormComponent  implements OnInit {
	@Input() job: Job;
	@Output() applicationEventEmitter = new EventEmitter<JobApplication>();
	@Input() forReference: Boolean;
	currencies = [`SGD`, `PHP`, `USD`, `EUR`, `EGP`, `HKD`, `AUD`, `BRL`, `JPY`];

	application: JobApplication= new JobApplication();

	applicationForm: FormGroup;
	formGroupSkills: FormArray;

	isApplicationFormValid: boolean = true;

	constructor(public fb: FormBuilder, @Inject(DOCUMENT) private document: Document) {	}

	onApplyClick() {
		let skills:any = [];
		let candidateApplication: any = this.applicationForm.value;
		for (let skill of Object.keys(this.application.skills)) {
			skills.push({name: skill, rate: (this.application.skills[skill] + 1)});
		}
		candidateApplication.skills = skills;
		this.application.skills = skills;
		if (!this.applicationForm.invalid) {
			this.applicationEventEmitter.emit(candidateApplication);
		} else {
			this.document.body.scrollTop = 200;
			this.isApplicationFormValid = false;
			setTimeout(() => {
				this.isApplicationFormValid = true;
			}, 5000);
		}
	}

	onFileUpload(event) {
		const files = event.target.files;
		if (files.length > 5) {
			alert('Maximum of 5 files can only be uploaded');
			this.application.files = null;
		} else {
			this.application.files = files;
		}
	}

	ngOnInit() {
		this.application.skills = {};
		this.formGroupSkills = this.fb.array([]);
		this.applicationForm = this.fb.group({
			reasonForLeaving: new FormControl('', [Validators.required]),
			basePerMonthCurrency: new FormControl('', [Validators.required]),
			basePerMonth: new FormControl('', [Validators.required]),
			bonusCurrency: new FormControl('', [Validators.required]),
			bonus: new FormControl('', [Validators.required]),
			skills: this.fb.array([]),
			strength: new FormControl('', [Validators.required]),
			improvements: new FormControl('', [Validators.required]),
			achievements: new FormControl('', [Validators.required]),
			management: new FormControl('', [Validators.required])
		});
	}
}
