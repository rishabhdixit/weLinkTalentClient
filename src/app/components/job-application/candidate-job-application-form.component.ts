import { Component, Input, OnInit, EventEmitter, Output, Inject } from '@angular/core';
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
						<input type="file" class="form-control" id="file" name="file" (change)="onFileUpload($event)" multiple required/>
						<div *ngIf="!application.files || !hasFiles"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<br/>
					<div class="row">
						<h3>What do you bring to this role?</h3>
					</div>
					<br/>
					<div class="form-group">
						<label for="reasonForLeaving"><b>Reason of interest (What are your Push and Pull Factors) ?</b><i class="red-color"> * </i></label>
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
					<br/>
					<div class="row">
						<p><b>Select the competencies which describe you best in the 5 areas below:</b></p>
					</div>
					<div class="form-group">
						<label for="management"><b>Management</b><i class="red-color"> * </i></label>
						<ul class="list-unstyled">
							<li *ngFor="let manage of management">
								<label class="labelWeight">
									<input type="radio" value="{{ manage.value }}" formControlName="management"/> &emsp;{{ manage.value }}
								</label>
							</li>
						</ul>
						<div *ngIf="applicationForm.get('management').touched && applicationForm.get('management').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="leadership"><b>Leadership</b><i class="red-color"> * </i></label>
						<ul class="list-unstyled">
							<li *ngFor="let lead of leadership">
								<label class="labelWeight">
									<input type="radio" value="{{ lead.value }}" formControlName="leadership"/> &emsp;{{ lead.value }}
								</label>
							</li>
						</ul>
						<div *ngIf="applicationForm.get('leadership').touched && applicationForm.get('leadership').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="selfManagement"><b>Self-Management</b><i class="red-color"> * </i></label>
						<ul class="list-unstyled">
							<li *ngFor="let selfManage of self_management">
								<label class="labelWeight">
									<input type="radio" value="{{ selfManage.value }}" formControlName="selfManagement"/> &emsp;{{ selfManage.value }}
								</label>
							</li>
						</ul>
						<div *ngIf="applicationForm.get('selfManagement').touched && applicationForm.get('selfManagement').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="relationship"><b>Relationships</b><i class="red-color"> * </i></label>
						<ul class="list-unstyled">
							<li *ngFor="let relation of relationship">
								<label class="labelWeight">
									<input type="radio" value="{{ relation.value }}" formControlName="relationship"/> &emsp;{{ relation.value }}
								</label>
							</li>
						</ul>
						<div *ngIf="applicationForm.get('relationship').touched && applicationForm.get('relationship').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="analytical"><b>Analytical</b><i class="red-color"> * </i></label>
						<ul class="list-unstyled">
							<li *ngFor="let analytic of analytics">
								<label class="labelWeight">
									<input type="radio" value="{{ analytic.value }}" formControlName="analytical"/> &emsp;{{ analytic.value }}
								</label>
							</li>
						</ul>
						<div *ngIf="applicationForm.get('analytical').touched && applicationForm.get('analytical').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="fitToJobReason"><b>Why are you best fit for this job</b><i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5" id="fitToJobReason"
						          name="fitToJobReason"
						          formControlName="fitToJobReason" required>
						</textarea>
						<div *ngIf="applicationForm.get('fitToJobReason').touched && applicationForm.get('fitToJobReason').invalid"
						     class="alert alert-danger form-control">Please fill out this field!</div>
					</div>
					<div class="form-group">
						<label for="jobRelatedAchievements"><b>What are the achievements related to this job you are the proudest of?
								</b><i class="red-color"> * </i></label>
						<textarea class="form-control"
						          rows="5" id="jobRelatedAchievements"
						          name="jobRelatedAchievements"
						          formControlName="jobRelatedAchievements" required>
						</textarea>
						<div *ngIf="applicationForm.get('jobRelatedAchievements').touched && applicationForm.get('jobRelatedAchievements').invalid"
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
		.button-class {
			text-align: center;
		}
		.skillStyle {
			color: #57148D;
			font-weight: 700;
			margin-bottom: 0;
		}
		i:hover {
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

	application: JobApplication= new JobApplication();

	applicationForm: FormGroup;
	formGroupSkills: FormArray;

	isApplicationFormValid: boolean = true;
	hasFiles = false;

	constructor(public fb: FormBuilder, @Inject(DOCUMENT) private document: Document) {	}

	onApplyClick() {
		let skills:any = [];
		let candidateApplication: any = this.applicationForm.value;
		for (let skill of Object.keys(this.application.skills)) {
			skills.push({name: skill, rate: (this.application.skills[skill] + 1)});
		}
		candidateApplication.skills = skills;
		this.application.skills = skills;
		if (!this.applicationForm.invalid && this.hasFiles) {
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
			this.hasFiles = false;
		} else {
			this.application.files = files;
			this.hasFiles = true;
		}
	}

	ngOnInit() {
		this.application.skills = {};
		this.formGroupSkills = this.fb.array([]);
		this.applicationForm = this.fb.group({
			reasonForLeaving: new FormControl('', [Validators.required]),
			skills: this.fb.array([]),
			management: new FormControl('', [Validators.required]),
			leadership: new FormControl('', [Validators.required]),
			selfManagement: new FormControl('', [Validators.required]),
			relationship: new FormControl('', [Validators.required]),
			analytical: new FormControl('', [Validators.required]),
			fitToJobReason: new FormControl('', [Validators.required]),
			jobRelatedAchievements: new FormControl('', [Validators.required]),
		});
	}
}
