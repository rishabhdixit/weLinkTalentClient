import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: `app-create-job-form`,
	template: `
		<form [formGroup]="createJobForm">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Job Tite*</label>
						<input type="text" class="formControl" formControlName="title" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Industry*</label>
						<input type="text" class="formControl" formControlName="industry" placeholder="Information Technology" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Job Type*</label>
						<input type="text" class="formControl" formControlName="jobType" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label class="labelWeight">Employment Type*</label>
						<input type="text" class="formControl" formControlName="employmentType" required/>
					</div>
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

export class CreateJobFormComponent implements OnInit {

	createJobForm: FormGroup;

	constructor(public fb: FormBuilder) { }

	ngOnInit() {
		this.createJobForm = this.fb.group({
			title: '',
			industry: '',
			jobType: '',
			employmentType: '',
		});
	}
}
