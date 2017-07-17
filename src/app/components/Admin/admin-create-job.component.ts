import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Job } from '../../models/job.model';

@Component({
	selector: `app-admin-create-job`,
	template: `
		<form [formGroup]="createJobForm">
			<div class="row">
				<h2>Job Details: </h2>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Job Tite*</label>
						<input type="text" class="form-control" formControlName="title" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Industry*</label>
						<input type="text" class="form-control" formControlName="industry" placeholder="Information Technology" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Job Type*</label>
						<input type="text" class="form-control" formControlName="jobType" placeholder="Permanent" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Employment Type*</label>
						<input type="text" class="form-control" formControlName="employmentType" placeholder="full-time" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Expertise*</label>
						<input type="text" class="form-control" formControlName="expertise" placeholder="Android Developer" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Years of Experience*</label>
						<input type="number" class="form-control" formControlName="experience" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Salary From*</label>
						<input type="number" class="form-control" formControlName="salaryFrom" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Salary To*</label>
						<input type="number" class="form-control" formControlName="salaryTo" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Application Slots*</label>
						<input type="number" class="form-control" formControlName="slots" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<h2>Company Details:</h2>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Company Name*</label>
						<input type="text" class="form-control" formControlName="companyName" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Location*</label>
						<input type="text" class="form-control" formControlName="location" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Contact Name*</label>
						<input type="text" class="form-control" formControlName="contactName" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Contact Email*</label>
						<input type="text" class="form-control" formControlName="contactEmail" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Phone Number*</label>
						<input type="text" class="form-control" formControlName="phoneNumber" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Company Logo*</label>
						<input type="file" class="form-control" formControlName="logo" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="form-group">
						<label class="labelWeight">About the Company*</label>
						<textarea class="form-control" rows="4" formControlName="aboutCompany"></textarea>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<button class="btn btn-primary pull-right" (click)="onClick()">SAVE</button>
				</div>
				<div class="col-md-6">
					<button class="btn btn-default pull-left">CANCEL</button>
				</div>
			</div>
		</form>
	`,
	styles: [`
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
		}
	`]
})

export class AdminCreateJobComponent implements OnInit {
	@Input() job: Job;
	@Output() removeSkillEvent = new EventEmitter<any>();
	@Output() editEvent = new EventEmitter<string>();

	createJobForm: FormGroup;
	isClicked:boolean = false;

	get skills(): FormArray {
		return <FormArray>this.createJobForm.get('skills');
	}

	constructor(public fb: FormBuilder) {	}

	ngOnInit() {
		this.createJobForm = this.fb.group({
			title: '',
			industry: '',
			jobType: '',
			employmentType: '',
			expertise: '',
			experience: '',
			salaryFrom: '',
			salaryTo: '',
			slots: '',
			skills: this.fb.array(this.job.skills.map(() => this.skillsFormGroup())),
			companyName: '',
			location: '',
			contactName: '',
			contactEmail: '',
			phoneNumber: '',
			logo: null,
			aboutCompany: '',
		});
	}

	saveSkill(index) {
		const profile = this.createJobForm.value;
		// this.saveProfileEvent.emit(profile);
	}

	editMode(event, editId) {
		this.editEvent.emit(editId);
		event.preventDefault();
	}

	addSkill(event) {
		this.skills.push(this.skillsFormGroup());
		this.editMode(event, 'skill' + (this.skills.length - 1));
	}

	cancelSkill(event, index) {
		const skill = this.job.skills[index];
        //
		// if (!skill || !skill.id) {
		// 	this.skills.removeAt(index);
		// }

		this.editMode(event, '');
	}

	removeSkill(index) {
		this.removeSkillEvent.emit({ index });
	}

	skillsFormGroup(): FormGroup {
		return this.fb.group({
			name: '',
		});
	}

	onClick() {
		console.log(this.createJobForm.value);
	}
}
