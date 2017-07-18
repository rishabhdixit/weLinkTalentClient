import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: `app-admin-create-job`,
	template: `
		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="row">
					<div class="col-md-10"></div>
					<div class="col-md-2">
						<button class="btn btn-primary form-control" (click)="onClickCreateJob()" *ngIf="!clicked">Create a Job</button>
					</div>
				</div>
			</div>
			<div class="panel-body" *ngIf="clicked">
				<br/>
				<form [formGroup]="createJobForm" novalidate (ngSubmit)="onSave()">
					<div class="row">
						<div class="col-md-12">
							<h4>Job Details:</h4>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Job Title<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="title" placeholder="Job Title" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Industry<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="industry" placeholder="Industry" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label class="labelWeight">Job Type<i class="color-red"> * </i></label>
										<select class="form-control" formControlName="job_type" required>
											<option value="Permanent">Permanent</option>
											<option value="Contractualization">Contractualization</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label class="labelWeight">Employment Type<i class="color-red"> * </i></label>
										<select class="form-control" formControlName="employment_type">
											<option value="Full Time">Full Time</option>
											<option value="Part Time">Part Time</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label class="labelWeight">Years of Experience<i class="color-red"> * </i></label>
										<input type="number" class="form-control" formControlName="years_experience" placeholder="Years of Experience" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Expertise<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="expertise" placeholder="Expertise" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-3">
									<div class="form-group">
										<label class="labelWeight">Salary Negotiable<i class="color-red"> * </i></label>
										<input type="checkbox" class="form-control" formControlName="salary_negotiable" required/>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<label class="labelWeight">Salary From<i class="color-red"> * </i></label>
										<input type="number" class="form-control" formControlName="salary_from" placeholder="Salary From" required/>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<label class="labelWeight">Salary To<i class="color-red"> * </i></label>
										<input type="number" class="form-control" formControlName="salary_to" placeholder="Salary To" required/>
									</div>
								</div>
								<div class="col-md-3">
									<div class="form-group">
										<label class="labelWeight">Vacant Slots<i class="color-red"> * </i></label>
										<input type="number" class="form-control" formControlName="remaining_slots" placeholder="Vacant Slots" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" formArrayName="skills">
										<div class="row">
											<div class="col-md-9">
												<label class="labelWeight">Required Skills<i class="color-red"> * </i></label>
											</div>
											<div class="col-md-3">
												<button type="button" class="btn btn-primary btn-sm form-control" (click)="addSkill()">add skills...</button>
											</div>
										</div>
										<div *ngFor="let skill of skills.controls; let i=index">
											<div class="row">
												<div class="col-md-10">
													<div [formGroupName]="i" style="padding-bottom: 5px;">
														<input type="text"
														       class="form-control"
														       placeholder="Skill"
														       formControlName="name"
														       required/>
													</div>
												</div>
												<div class="col-md-2">
													<button type="button" class="btn btn-danger btn-sm form-control" (click)="removeSkill(i)">remove</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" formArrayName="responsibilities">
										<div class="row">
											<div class="col-md-9">
												<label class="labelWeight">Responsibilities<i class="color-red"> * </i></label>
											</div>
											<div class="col-md-3">
												<button type="button" class="btn btn-primary btn-sm form-control" (click)="addResponsibility()">add responsibilities...</button>
											</div>
										</div>
										<div *ngFor="let responsibility of responsibilities.controls; let i=index">
											<div class="row">
												<div class="col-md-10">
													<div [formGroupName]="i" style="padding-bottom: 5px;">
														<input type="text"
														       class="form-control"
														       placeholder="Responsibility"
														       formControlName="responsibility"
														       required/>
													</div>
												</div>
												<div class="col-md-2">
													<button type="button" class="btn btn-danger btn-sm form-control" (click)="removeResponsibility(i)">remove</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" formArrayName="ideal_talent">
										<div class="row">
											<div class="col-md-9">
												<label class="labelWeight">Ideal Talent<i class="color-red"> * </i></label>
											</div>
											<div class="col-md-3">
												<button type="button" class="btn btn-primary btn-sm form-control" (click)="addIdealTalent()">add ideal talent...</button>
											</div>
										</div>
										<div *ngFor="let idealTalent of ideal_talent.controls; let i=index">
											<div class="row">
												<div class="col-md-10">
													<div [formGroupName]="i" style="padding-bottom: 5px;">
														<input type="text"
														       class="form-control"
														       placeholder="Ideal Talent"
														       formControlName="ideal_talent"
														       required/>
													</div>
												</div>
												<div class="col-md-2">
													<button type="button" class="btn btn-danger btn-sm form-control" (click)="removeIdealTalent(i)">remove</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br/>
					<hr/>
					<br/>
					<div class="row">
						<div class="col-md-12" formGroupName="company">
							<h4>Company Details:</h4>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Company Name<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="name" placeholder="Company Name" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Address<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="address" placeholder="Complete Address" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group" formArrayName="phone_numbers">
										<div class="row">
											<div class="col-md-9">
												<label class="labelWeight">Phone Numbers<i class="color-red"> * </i></label>
											</div>
											<div class="col-md-3">
												<button type="button" class="btn btn-primary btn-sm form-control" (click)="addPhoneNumber()">add phone numbers...</button>
											</div>
										</div>
										<div *ngFor="let phoneNumber of phone_numbers.controls; let i=index">
											<div class="row">
												<div class="col-md-10">
													<div [formGroupName]="i" style="padding-bottom: 5px;">
														<input type="text"
														       class="form-control"
														       placeholder="Phone Numbers"
														       formControlName="number"
														       required/>
													</div>
												</div>
												<div class="col-md-2">
													<button type="button" class="btn btn-danger btn-sm form-control" (click)="removePhoneNumber(i)">remove</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label class="labelWeight">Email Address<i class="color-red"> * </i></label>
										<input type="text" class="form-control" formControlName="email" placeholder="Email Address" required/>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="labelWeight">Company Logo<i class="color-red"> * </i></label>
										<input type="file" class="form-control" formControlName="logo" placeholder="Company Logo" required/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">Twitter Profile</label>
										<input type="url" class="form-control" formControlName="twitter_profile" placeholder="Twitter profile url"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">LinkedIn Profile</label>
										<input type="url" class="form-control" formControlName="linkedin_profile" placeholder="LinkedIn profile url"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label class="labelWeight">About the Company<i class="color-red"> * </i></label>
										<textarea class="form-control" rows="10" formControlName="about" placeholder="About Company"></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4"></div>
								<div class="col-md-2">
									<button type="button" class="btn btn-default pull-right form-control" (click)="onCancel()">CANCEL</button>
								</div>
								<div class="col-md-2">
									<button type="submit" class="btn btn-primary pull-left form-control" [disabled]="!createJobForm.valid">SAVE</button>
								</div>
								<div class="col-md-4"></div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
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
		textarea {
			resize: none;
		}
	`]
})

export class AdminCreateJobComponent implements OnInit {
	createJobForm: FormGroup;
	clicked: boolean = false;

	get phone_numbers() {
		const companyFormGroup = <FormGroup>this.createJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		return phoneNumbers;
	}

	get skills() {
		return <FormArray>this.createJobForm.controls['skills'];
	}

	get responsibilities() {
		return <FormArray>this.createJobForm.controls['responsibilities'];
	}

	get ideal_talent() {
		return <FormArray>this.createJobForm.controls['ideal_talent'];
	}

	constructor(public fb: FormBuilder) {}

	ngOnInit() {
		this.createJobForm = this.fb.group({
			title: new FormControl('', [Validators.required]),
			industry: new FormControl('', [Validators.required]),
			job_type: new FormControl('', [Validators.required]),
			employment_type: new FormControl('', [Validators.required]),
			company: new FormGroup({
				name: new FormControl('', [Validators.required]),
				address: new FormControl('', [Validators.required]),
				about: new FormControl('', [Validators.required]),
				email: new FormControl('', [Validators.required]),
				twitter_profile: new FormControl('', [Validators.required]),
				linkedin_profile: new FormControl('', [Validators.required]),
				logo: new FormControl('', [Validators.required]),
				phone_numbers: this.fb.array([
					this.initPhoneNumber(),
				])
			}),
			description: new FormControl('',  [Validators.required]),
			expertise: new FormControl('', [Validators.required]),
			years_experience: new FormControl('', [Validators.required]),
			salary_from: new FormControl('', [Validators.required]),
			salary_to: new FormControl('', [Validators.required]),
			salary_currency: new FormControl('', [Validators.required]),
			salary_negotiable: new FormControl(false, [Validators.required]),
			remaining_slots: new FormControl('', [Validators.required]),
			skills: this.fb.array([
				this.initSkill(),
			]),
			responsibilities: this.fb.array([
				this.initResponsibility(),
			]),
			ideal_talent: this.fb.array([
				this.initIdealTalent(),
			]),
			location: new FormControl('', [Validators.required]),
			contact_name: new FormControl('', [Validators.required]),
			contact_email: new FormControl('', [Validators.required]),
			contact_number: new FormControl('', [Validators.required])
		});
	}

	onCancel() {
		this.clicked = false;
	}

	onClickCreateJob() {
		this.clicked = true;
	}

	initPhoneNumber() {
		return this.fb.group({
			number: ['', Validators.required]
		});
	}

	addPhoneNumber() {
		const companyFormGroup = <FormGroup>this.createJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		phoneNumbers.push(this.initPhoneNumber());
	}

	removePhoneNumber(i: number) {
		const companyFormGroup = <FormGroup>this.createJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		phoneNumbers.removeAt(i);
	}

	initSkill() {
		return this.fb.group({
			name: ['', Validators.required]
		});
	}

	addSkill() {
		const skills = <FormArray>this.createJobForm.controls['skills'];
		skills.push(this.initSkill());
	}

	removeSkill(i: number) {
		const skills = <FormArray>this.createJobForm.controls['skills'];
		skills.removeAt(i);
	}

	initResponsibility() {
		return this.fb.group({
			responsibility: ['', Validators.required]
		});
	}

	addResponsibility() {
		const responsibilities = <FormArray>this.createJobForm.controls['responsibilities'];
		responsibilities.push(this.initResponsibility());
	}

	removeResponsibility(i: number) {
		const responsibilities = <FormArray>this.createJobForm.controls['responsibilities'];
		responsibilities.removeAt(i);
	}

	initIdealTalent() {
		return this.fb.group({
			ideal_talent: ['', Validators.required]
		});
	}

	addIdealTalent() {
		const idealTalents = <FormArray>this.createJobForm.controls['ideal_talent'];
		idealTalents.push(this.initIdealTalent());
	}

	removeIdealTalent(i: number) {
		const idealTalents = <FormArray>this.createJobForm.controls['ideal_talent'];
		idealTalents.removeAt(i);
	}

	onSave() {
		console.log(this.createJobForm.value);
	}
}
