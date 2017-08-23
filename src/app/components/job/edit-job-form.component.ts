import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { Job } from '../../models/job.model';
import { User } from '../../models/user.model';

import * as fromRoot from '../../reducers';

@Component({
	selector: `app-edit-job-form`,
	templateUrl: 'edit-job-form.component.html',
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
		.add-button {
			color: blue;
			pointer-events: visible;
			cursor: pointer;
		}
	`]
})

export class EditJobFormComponent implements OnInit {

	@Output() OnEditJobEvent = new EventEmitter<Job>();
	@Output() OnCancelEditJobEvent = new EventEmitter();
	@Input() user: User;
	@Input() selectedJob: Job;

	isEditJobFormValid: boolean = true;
	editJobForm: FormGroup;

	get phone_numbers() {
		const companyFormGroup = <FormGroup>this.editJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		return phoneNumbers;
	}

	get skills() {
		return <FormArray>this.editJobForm.controls['skills'];
	}

	get responsibilities() {
		return <FormArray>this.editJobForm.controls['responsibilities'];
	}

	get ideal_talent() {
		return <FormArray>this.editJobForm.controls['ideal_talent'];
	}

	get company () {
		return <FormGroup>this.editJobForm.controls['company'];
	}

	constructor(public fb: FormBuilder, private store: Store<fromRoot.State>, @Inject(DOCUMENT) private document: Document) {}

	ngOnInit() {
		this.store.select(fromRoot.getUser).subscribe((user) => this.user = user);
		this.editJobForm = this.fb.group({
			employer_id: new FormControl(this.user.id, [Validators.required]),
			company_name: new FormControl(this.selectedJob.company ? this.selectedJob.company.name : '', [Validators.required]),
			title: new FormControl(this.selectedJob.title, [Validators.required]),
			industry: new FormControl(this.selectedJob.industry, [Validators.required]),
			job_type: new FormControl(this.selectedJob.job_type, [Validators.required]),
			employment_type: new FormControl(this.selectedJob.employment_type, [Validators.required]),
			company: new FormGroup({
				name: new FormControl(this.selectedJob.company ? this.selectedJob.company.name : '', [Validators.required]),
				address: new FormControl(this.selectedJob.company ? this.selectedJob.company.address : '', [Validators.required]),
				about: new FormControl(this.selectedJob.company ? this.selectedJob.company.about : '', [Validators.required]),
				email: new FormControl(this.selectedJob.company ? this.selectedJob.company.email : '', [Validators.required]),
				twitter_profile: new FormControl(this.selectedJob.company ? this.selectedJob.company.twitter_profile : ''),
				linkedin_profile: new FormControl(this.selectedJob.company ? this.selectedJob.company.linkedin_profile : ''),
				phone_numbers: this.fb.array(this.initCompanyPhoneNumbers()),
				company_logo: new FormControl(this.selectedJob.company_logo, [Validators.required])
			}),
			company_logo: new FormControl(this.selectedJob.company_logo ? this.selectedJob.company_logo : '', [Validators.required]),
			description: new FormControl(this.selectedJob.description ? this.selectedJob.description : '',  [Validators.required]),
			expertise: new FormControl(this.selectedJob.expertise ? this.selectedJob.expertise : '', [Validators.required]),
			years_experience: new FormControl(this.selectedJob.years_experience ? this.selectedJob.years_experience : '', [Validators.required]),
			salary_from: new FormControl(this.selectedJob.salary_from ? this.selectedJob.salary_from : '', [Validators.required]),
			salary_to: new FormControl(this.selectedJob.salary_to ? this.selectedJob.salary_to : '', [Validators.required]),
			salary_currency: new FormControl(this.selectedJob.salary_currency ? this.selectedJob.salary_currency : '', [Validators.required]),
			salary_negotiable: new FormControl(this.selectedJob.salary_negotiable),
			application_slots: new FormControl(this.selectedJob.application_slots, [Validators.required]),
			skills: this.fb.array(this.initializeSkills()),
			responsibilities: this.fb.array(this.initializeResponsibilities()),
			ideal_talent: this.fb.array(this.initializeIdealTalents()),
			location: new FormControl(this.selectedJob.location ? this.selectedJob.location : '', [Validators.required]),
			contact_name: new FormControl(this.selectedJob.contact_name ? this.selectedJob.contact_name : ''),
			contact_email: new FormControl(this.selectedJob.contact_email ? this.selectedJob.contact_email : ''),
			contact_number: new FormControl(this.selectedJob.contact_number ? this.selectedJob.contact_number : '')
		});
	}

	initCompanyPhoneNumbers(): FormControl[] {
		let phoneNumbers: FormControl[] = [];
		if (this.selectedJob.company) {
			_.forIn(this.selectedJob.company.phone_numbers, function (value, key) {
				phoneNumbers.push(new FormControl(value, [Validators.required]));
			});
		}
		return phoneNumbers;
	}

	initPhoneNumber() {
		return this.fb.control('', Validators.required);
	}

	addPhoneNumber() {
		const companyFormGroup = <FormGroup>this.editJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		phoneNumbers.push(this.initPhoneNumber());
	}

	removePhoneNumber(i: number) {
		const companyFormGroup = <FormGroup>this.editJobForm.controls['company'];
		const phoneNumbers = <FormArray>companyFormGroup.controls['phone_numbers'];
		phoneNumbers.removeAt(i);
	}

	initializeSkills(): FormControl[] {
		let skills: FormControl[] = [];
		_.forIn(this.selectedJob.skills, function (value, key) {
			skills.push(new FormControl(value, [Validators.required]));
		});
		return skills;
	}

	initSkill() {
		return this.fb.control('', Validators.required);
	}

	addSkill() {
		const skills = <FormArray>this.editJobForm.controls['skills'];
		skills.push(this.initSkill());
	}

	removeSkill(i: number) {
		const skills = <FormArray>this.editJobForm.controls['skills'];
		skills.removeAt(i);
	}

	initializeResponsibilities(): FormControl[] {
		let responsibilities: FormControl[] = [];
		_.forIn(this.selectedJob.responsibilities, function (value, key) {
			responsibilities.push(new FormControl(value, [Validators.required]));
		});
		return responsibilities;
	}

	initResponsibility() {
		return this.fb.control('', Validators.required);
	}

	addResponsibility() {
		const responsibilities = <FormArray>this.editJobForm.controls['responsibilities'];
		responsibilities.push(this.initResponsibility());
	}

	removeResponsibility(i: number) {
		const responsibilities = <FormArray>this.editJobForm.controls['responsibilities'];
		responsibilities.removeAt(i);
	}

	initializeIdealTalents(): FormControl[] {
		let idealTalents: FormControl[] = [];
		_.forIn(this.selectedJob.ideal_talent, function (value, key) {
			idealTalents.push(new FormControl(value, [Validators.required]));
		});
		return idealTalents;
	}

	initIdealTalent() {
		return this.fb.control('', Validators.required);
	}

	addIdealTalent() {
		const idealTalents = <FormArray>this.editJobForm.controls['ideal_talent'];
		idealTalents.push(this.initIdealTalent());
	}

	removeIdealTalent(i: number) {
		const idealTalents = <FormArray>this.editJobForm.controls['ideal_talent'];
		idealTalents.removeAt(i);
	}

	onFileUpload(event) {
		const files = event.target.files;
		if (files.length > 5) {
			alert('Maximum of 5 files can only be uploaded');
			this.editJobForm.controls['company_logo'].setValue(null);
		} else {
			this.editJobForm.controls['company_logo'].setValue(files);
		}
	}

	onCancel() {
		this.OnCancelEditJobEvent.emit();
	}

	onSave() {
		this.setEmployerId();
		this.setCompanyName();
		this.setContactInfo();
		if (!this.editJobForm.invalid) {
			this.OnEditJobEvent.emit(this.editJobForm.value);
		} else {
			this.document.body.scrollTop = 200;
			this.isEditJobFormValid = false;
			setTimeout(() => {
				this.isEditJobFormValid = true;
			}, 5000);
		}
	}

	private setEmployerId(): void {
		this.editJobForm.controls['employer_id'].setValue(this.user.id);
	}

	private setCompanyName(): void {
		let company_name = this.company.controls['name'].value;
		this.editJobForm.controls['company_name'].setValue(company_name);
	}

	private setContactInfo(): void {
		let location = this.company.controls['address'].value;
		this.editJobForm.controls['location'].setValue(location);

		let contact_name = this.company.controls['name'].value;
		this.editJobForm.controls['contact_name'].setValue(contact_name);

		let contact_email = this.company.controls['email'].value;
		this.editJobForm.controls['contact_email'].setValue(contact_email);
	}

	validateFields(control: FormControl): boolean {
		return control.touched && control.invalid;
	}
}
