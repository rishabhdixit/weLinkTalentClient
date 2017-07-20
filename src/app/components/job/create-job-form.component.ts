import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Job } from '../../models/job.model';
import { User } from '../../models/user.model';

import * as fromRoot from '../../reducers';

@Component({
	selector: `app-create-job-form`,
	templateUrl: 'create-job-form.component.html',
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

export class CreateJobFormComponent implements OnInit {

	@Output() OnCreateJobEvent = new EventEmitter<Job>();
	@Output() OnCancelCreateJobEvent = new EventEmitter();
	@Input() user: User;

	createJobForm: FormGroup;

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

	get company () {
		return <FormGroup>this.createJobForm.controls['company'];
	}

	constructor(public fb: FormBuilder, private store: Store<fromRoot.State>) {}

	ngOnInit() {
		this.store.select(fromRoot.getUser).subscribe((user) => this.user = user);
		this.createJobForm = this.fb.group({
			employer_id: new FormControl('', [Validators.required]),
			company_name: new FormControl('', [Validators.required]),
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
				phone_numbers: this.fb.array([
					this.initPhoneNumber(),
				])
			}),
			company_logo: new FormControl('', [Validators.required]),
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

	initPhoneNumber() {
		return this.fb.control('', Validators.required);
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
		return this.fb.control('', Validators.required);
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
		return this.fb.control('', Validators.required);
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
		return this.fb.control('', Validators.required);
	}

	addIdealTalent() {
		const idealTalents = <FormArray>this.createJobForm.controls['ideal_talent'];
		idealTalents.push(this.initIdealTalent());
	}

	removeIdealTalent(i: number) {
		const idealTalents = <FormArray>this.createJobForm.controls['ideal_talent'];
		idealTalents.removeAt(i);
	}

	onFileUpload(event) {
		const files = event.target.files;
		if (files.length > 5) {
			alert('Maximum of 5 files can only be uploaded');
			this.createJobForm.controls['company_logo'].setValue(null);
		} else {
			this.createJobForm.controls['company_logo'].setValue(files);
		}
	}

	onCancel() {
		this.OnCancelCreateJobEvent.emit();
	}
	onSave() {
		this.setEmployerId();
		this.setCompanyName();
		this.OnCreateJobEvent.emit(this.createJobForm.value);
	}

	private setEmployerId(): void {
		this.createJobForm.controls['employer_id'].setValue(this.user.id);
	}

	private setCompanyName(): void {
		let company_name = this.company.controls['name'].value;
		this.createJobForm.controls['company_name'].setValue(company_name);
	}
}
