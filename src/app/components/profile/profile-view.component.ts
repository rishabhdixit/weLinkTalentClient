import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	AbstractControl,
	ValidatorFn,
	FormArray
} from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Profile } from '../../models/profile.model';

@Component({
	moduleId: module.id,
	selector: 'app-profile-view',
	templateUrl: 'profile-view.component.html',
	styleUrls: ['profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
	@Input() profile: Profile;
	@Input() edit: string;
	@Input() loading: boolean;

	@Output() editEvent = new EventEmitter<string>();
	@Output() saveProfileEvent = new EventEmitter<any>();
	@Output() removePositionEvent = new EventEmitter<any>();
	@Output() removeSkillEvent = new EventEmitter<any>();


	logicalValueList: Array<any> = ['Yes', 'No'];
	bonusReceivable: Array<any> = ['12 month', '13 month'];

	profileForm: FormGroup;

	get positions(): FormArray {
		return <FormArray>this.profileForm.get('positions');
	}

	get skills(): FormArray {
		return <FormArray>this.profileForm.get('skills');
	}
	// TODO - Enable ToastManager.
	constructor(private fb: FormBuilder, private toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit() {
		this.profileForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			headline: ['', Validators.required],
			pictureUrl: ['', Validators.required],
			emailAddress: ['', Validators.required],
			summary: ['', Validators.required],
			positions: this.fb.array(this.profile.positions.map(() => this.positionFormGroup())),
			skills: this.fb.array(this.profile.skills.map(() => this.skillsFormGroup())),

			birthDate: ['', Validators.required],
			maritalStatus: ['', Validators.required],
			mobileNumber: ['', Validators.required],
			NRIC: ['', Validators.required],
			noOfchildren: ['', Validators.required],
			singaporeVisa: ['', Validators.required],
			visaValidity: ['', Validators.required],
			noticePeriod: ['', Validators.required],
			noticePeriodNegotioble: ['', Validators.required],
			salaryPerMonth: ['', Validators.required],
			salaryBasis: ['', Validators.required],
			bonusAmount: ['', Validators.required],
			bonusCalc: ['', Validators.required],
			allowance: ['', Validators.required],
			allowanceDesc: ['', Validators.required],
			incentives: ['', Validators.required],
			vestingPeriod: ['', Validators.required],
		});

		this.profileForm.patchValue({
			firstName: this.profile.firstName,
			lastName: this.profile.lastName,
			headline: this.profile.headline,
			emailAddress: this.profile.emailAddress,
			pictureUrl: this.profile.pictureUrl,
			summary: this.profile.summary,
			positions: this.profile.positions,
			skills: this.profile.skills,

			birthDate: this.profile.birthDate,
			maritalStatus: this.profile.maritalStatus,
			mobileNumber: this.profile.mobileNumber,
			NRIC: this.profile.NRIC,
			noOfchildren: this.profile.noOfchildren,
			singaporeVisa: this.profile.singaporeVisa,
			visaValidity: this.profile.visaValidity,
			noticePeriod: this.profile.noticePeriod,
			noticePeriodNegotioble: this.profile.noticePeriodNegotioble,
			salaryPerMonth: this.profile.salaryPerMonth,
			salaryBasis: this.profile.salaryBasis,
			bonusAmount: this.profile.bonusAmount,
			bonusCalc: this.profile.bonusCalc,
			allowance: this.profile.allowance,
			allowanceDesc: this.profile.allowanceDesc,
			incentives: this.profile.incentives,
			vestingPeriod: this.profile.vestingPeriod,
		});
		this.profileFormDisable();
	}

	positionFormGroup(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required],
			company: this.fb.group({ name: ['', Validators.required] }),
			location: this.fb.group({ name: '' }),
			responsibilities: ['', Validators.required],
			startDate: ['', Validators.required],
			endDate: ['', Validators.required],
		});
	}

	skillsFormGroup(): FormGroup {
		return this.fb.group({
			name: ''
		});
	}

	editMode(event, editId) {
		this.editEvent.emit(editId);
		event.preventDefault();

		if (editId && editId === 'basic') {
			this.profileFormEnable();
		} else {
			this.profileFormDisable();
		}
	}

	saveProfile() {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
		this.profileFormDisable();
	}

	cancelProfile(event) {
		this.editMode(event, '');
	}

	savePosition(index) {
		const profile = this.profileForm.value;
		this.saveProfileEvent.emit(profile);
	}

	addPosition(event) {
		this.positions.push(this.positionFormGroup());
		this.editMode(event, 'position' + (this.positions.length - 1));
	}

	// Cancel editing position.
	// If position is empty or has not been save yet to server remove form from formarray.
	cancelPosition(event, index) {
		const position = this.profile.positions[index];

		if (!position || !position.id) {
			this.positions.removeAt(index);
		}

		this.editMode(event, '');
	}

	saveSkill(index) {
		const profile = this.profileForm.value;
		this.saveProfileEvent.emit(profile);
	}

	addSkill(event) {
		this.skills.push(this.skillsFormGroup());
		this.editMode(event, 'skill' + (this.skills.length - 1));
	}

	cancelSkill(event, index) {
		const skill = this.profile.skills[index];

		if (!skill || !skill.id) {
			this.skills.removeAt(index);
		}

		this.editMode(event, '');
	}

	removeSkill(index) {
		this.removeSkillEvent.emit({ index });
	}
	removePosition(index) {
		this.removePositionEvent.emit({ index });
	}

	profileFormDisable() {
		this.profileForm.get('firstName').disable();
		this.profileForm.get('lastName').disable();
		this.profileForm.get('emailAddress').disable();
		this.profileForm.get('birthDate').disable();
		this.profileForm.get('maritalStatus').disable();
		this.profileForm.get('mobileNumber').disable();
		this.profileForm.get('NRIC').disable();
		this.profileForm.get('noOfchildren').disable();
		this.profileForm.get('singaporeVisa').disable();
		this.profileForm.get('visaValidity').disable();
		this.profileForm.get('noticePeriod').disable();
		this.profileForm.get('noticePeriodNegotioble').disable();
		this.profileForm.get('salaryPerMonth').disable();
		this.profileForm.get('salaryBasis').disable();
		this.profileForm.get('bonusAmount').disable();
		this.profileForm.get('bonusCalc').disable();
		this.profileForm.get('allowance').disable();
		this.profileForm.get('allowanceDesc').disable();
		this.profileForm.get('incentives').disable();
		this.profileForm.get('vestingPeriod').disable();
	}

	profileFormEnable() {
		this.profileForm.get('firstName').enable();
		this.profileForm.get('lastName').enable();
		this.profileForm.get('emailAddress').enable();
		this.profileForm.get('birthDate').enable();
		this.profileForm.get('maritalStatus').enable();
		this.profileForm.get('mobileNumber').enable();
		this.profileForm.get('NRIC').enable();
		this.profileForm.get('noOfchildren').enable();
		this.profileForm.get('singaporeVisa').enable();
		this.profileForm.get('visaValidity').enable();
		this.profileForm.get('noticePeriod').enable();
		this.profileForm.get('noticePeriodNegotioble').enable();
		this.profileForm.get('salaryPerMonth').enable();
		this.profileForm.get('salaryBasis').enable();
		this.profileForm.get('bonusAmount').enable();
		this.profileForm.get('bonusCalc').enable();
		this.profileForm.get('allowance').enable();
		this.profileForm.get('allowanceDesc').enable();
		this.profileForm.get('incentives').enable();
		this.profileForm.get('vestingPeriod').enable();
	}
}
