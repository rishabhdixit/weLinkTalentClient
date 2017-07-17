import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: `app-admin-create-job`,
	template: `
		<form [formGroup]="createJobForm">
			<div class="row">
				<div class="col-md-12">
					<h3>Job Details: </h3>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Job Title<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="title" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Industry<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="industry" placeholder="Information Technology" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Job Type<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="jobType" placeholder="Permanent" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Employment Type<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="employmentType" placeholder="full-time" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Expertise<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="expertise" placeholder="Android Developer" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Years of Experience<i class="color-red"> * </i></label>
								<input type="number" class="form-control" formControlName="experience" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-4">
							<div class="form-group">
								<label class="labelWeight">Salary From<i class="color-red"> * </i></label>
								<input type="number" class="form-control" formControlName="salaryFrom" required/>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label class="labelWeight">Salary To<i class="color-red"> * </i></label>
								<input type="number" class="form-control" formControlName="salaryTo" required/>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-group">
								<label class="labelWeight">Application Slots<i class="color-red"> * </i></label>
								<input type="number" class="form-control" formControlName="slots" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="labelWeight">Required Skills<i class="color-red"> * </i></label>
								<div class="input-group">
									<input type="text" class="form-control" style="margin-right: 20px;"/>
									<div class="buttons">
										<button class="btn btn-primary">ADD</button>
										<button class="btn btn-default">CANCEL</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="labelWeight">Responsibilities<i class="color-red"> * </i></label>
								<div class="input-group">
									<input type="text" class="form-control" style="margin-right: 20px;"/>
									<div class="buttons">
										<button class="btn btn-primary">ADD</button>
										<button class="btn btn-default">CANCEL</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="labelWeight">Ideal Talent<i class="color-red"> * </i></label>
								<div class="input-group">
									<input type="text" class="form-control" style="margin-right: 20px;"/>
									<div class="buttons">
										<button class="btn btn-primary">ADD</button>
										<button class="btn btn-default">CANCEL</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br/>
			<div class="row">
				<div class="col-md-12">
					<h3>Company Details:</h3>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Company Name<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="companyName" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Location<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="location" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Contact Name<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="contactName" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Contact Email<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="contactEmail" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Phone Number<i class="color-red"> * </i></label>
								<input type="text" class="form-control" formControlName="phoneNumber" required/>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label class="labelWeight">Company Logo<i class="color-red"> * </i></label>
								<input type="file" class="form-control" formControlName="logo" required/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
								<label class="labelWeight">About the Company<i class="color-red"> * </i></label>
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
				</div>
			</div>
		</form>
	`,
	styles: [`
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
		}
		.color-red {
			color: red;
		}
		.btn {
			border-radius: 0%;
		}
	`]
})

export class AdminCreateJobComponent implements OnInit {

	createJobForm: FormGroup;

	constructor(public fb: FormBuilder) {  }

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
			skills: new FormArray([
				new FormControl('', [Validators.required]),
			]),
			responsibilities: new FormArray([
				new FormControl('', [Validators.required]),
			]),
			ideal_talent: new FormArray([
				new FormControl('', [Validators.required]),
			]),
			companyName: '',
			location: '',
			contactName: '',
			contactEmail: '',
			phoneNumber: '',
			logo: null,
			aboutCompany: '',
		});
	}

		onClick() {
		console.log(this.createJobForm.value);
	}
}
