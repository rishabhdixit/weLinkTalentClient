import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { isUndefined } from 'util';

import { Profile } from '../../models/profile.model';

@Component({
	moduleId: module.id,
	selector: 'app-profile-view',
	templateUrl: 'profile-view.component.html',
	styleUrls: ['profile-view.component.css']
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
	noticePeriodValueList: Array<any> = ['Immediately', '1 month', '3 months', '6 months'];
	maritalStatuses: Array<String> = ['Single', 'Married', 'Divorce', 'Separated', 'Widowed'];
	moneyCurrencies: Array<String> = ['SGD', 'USD'];
	percentagesTravelAccepted: Array<String> = ['No travel', '25%', '50%', '75%'];

	profileForm: FormGroup;

	get workExperiences(): FormArray {
		return <FormArray>this.profileForm.get('workExperiences');
	}

	get skills(): FormArray {
		return <FormArray>this.profileForm.get('skills');
	}

	// TODO - Enable ToastManager.
	constructor(private fb: FormBuilder, private toastr: ToastsManager, vcr: ViewContainerRef) {
		this.toastr.setRootViewContainerRef(vcr);
	}

	ngOnInit(): void {
		this.profileForm = this.fb.group({
			firstName: this.fb.control('', Validators.required),
			lastName: this.fb.control('', Validators.required),
			headline: this.fb.control('', Validators.required),
			pictureUrl: this.fb.control('', Validators.required),
			emailAddress: this.fb.control('', Validators.required),
			summary: this.fb.control('', Validators.required),

			birthDate: this.fb.control('', Validators.required),
			maritalStatus: this.fb.control('', Validators.required),
			mobileNumber: this.fb.control('', Validators.required),
			NRIC: this.fb.control('', Validators.required),
			singaporeVisa: this.fb.control('', Validators.required),
			visaValidity: this.fb.control('', Validators.required),
			noticePeriod: this.fb.control('', Validators.required),
			noticePeriodNegotiable: this.fb.control('', Validators.required),
			currentSalary: this.fb.group({
				currency: this.fb.control(''),
				annualSalary: this.fb.control(''),
				annualBonus: this.fb.control(''),
				allowance: this.fb.group({
					transportation: this.fb.control(false),
					housing: this.fb.control(false),
					schooling: this.fb.control(false),
					health: this.fb.control(false),
					others: this.fb.control(false),
					otherAllowanceName: this.fb.control(''),
					totalAllowance: this.fb.control('')
				}),
				isOnExpatPackage: this.fb.control('')
			}),
			expectedSalary: this.fb.group({
				currency: this.fb.control(''),
				annualSalaryPackage: this.fb.control(''),
				isOnExpatPackage: this.fb.control('')
			}),
			miscellaneous: this.fb.group({
				percentageTravelAccepted: this.fb.control(''),
				drivingLicense: this.fb.control('')
			}),
			workExperiences: this.fb.array([]),
			skills: this.fb.array(this.profile.skills.map(() => this.initSkill()))
		});

		this.profileForm.patchValue({
			firstName: this.profile.firstName,
			lastName: this.profile.lastName,
			headline: this.profile.headline,
			emailAddress: this.profile.emailAddress,
			pictureUrl: this.profile.pictureUrl,
			summary: this.profile.summary,

			birthDate: this.profile.birthDate,
			maritalStatus: this.profile.maritalStatus,
			mobileNumber: this.profile.mobileNumber,
			NRIC: this.profile.NRIC,
			singaporeVisa: this.profile.singaporeVisa,
			visaValidity: this.profile.visaValidity,
			noticePeriod: this.profile.noticePeriod,
			noticePeriodNegotiable: this.profile.noticePeriodNegotiable,
			currentSalary: {
				currency: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.currency : '',
				annualSalary: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.annualSalary : '',
				annualBonus: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.annualBonus : '',
				allowance: {
					transportation: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.transportation : false,
					housing: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.housing : false,
					schooling: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.schooling : false,
					health: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.health : false,
					others: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.others : false,
					otherAllowanceName: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.otherAllowanceName : '',
					totalAllowance: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.allowance.totalAllowance : ''
				},
				isOnExpatPackage: !this.isValueUndefined(this.profile.currentSalary) ? this.profile.currentSalary.isOnExpatPackage : ''
			},
			expectedSalary: {
				currency: !this.isValueUndefined(this.profile.expectedSalary) ? this.profile.expectedSalary.currency : '',
				annualSalaryPackage: !this.isValueUndefined(this.profile.expectedSalary) ? this.profile.expectedSalary.annualSalaryPackage : '',
				isOnExpatPackage: !this.isValueUndefined(this.profile.expectedSalary) ? this.profile.expectedSalary.isOnExpatPackage : ''
			},
			miscellaneous: {
				percentageTravelAccepted: !this.isValueUndefined(this.profile.miscellaneous) ? this.profile.miscellaneous.percentageTravelAccepted : '',
				drivingLicense: !this.isValueUndefined(this.profile.miscellaneous) ? this.profile.miscellaneous.drivingLicense : ''
			},
			// workExperiences: this.profile.workExperiences,
			skills: this.profile.skills
		});

		this.profileFormDisable();
		this.profileFormCurrentSalaryDisable();
		this.profileFormExpectedSalaryDisable();
		this.profileFormMiscellaneousDisable();
	}

	initWorkExperience(): FormGroup {
		return this.fb.group({
			title: this.fb.control('', Validators.required),
			company: this.fb.group({
				name: this.fb.control('', Validators.required)
			}),
			isCurrent: this.fb.control(false, Validators.required),
			address: this.fb.control('', Validators.required),
			startDate: this.fb.control('', Validators.required),
			endDate: this.fb.control('', Validators.required),
			responsibilities: this.fb.control('', Validators.required)
		});
	}

	initSkill(): FormGroup {
		return this.fb.group({
			skill: this.fb.control('', Validators.required),
			rate: this.fb.control('')
		});
	}

	addWorkExperience(): void {
		this.workExperiences.push(this.initWorkExperience());
	}

	addSkill(): void {
		this.skills.push(this.initSkill());
	}

	saveWorkExperiences(): void {
		if (!this.workExperiences.invalid) {
			const profile = this.profileForm.value;

			delete profile.positions;
			delete profile.skills;

			this.saveProfileEvent.emit(profile);
		} else {
			// TODO: throw an error message on the ui.
		}
	}

	saveSkills(): void {
		if (!this.skills.invalid) {
			const profile = this.profileForm.value;

			delete profile.positions;
			delete profile.workExperiences;

			this.saveProfileEvent.emit(profile);
		} else {
			// TODO: throw an error message on the ui.
		}
	}

	removeWorkExperience(i: number): void {
		this.workExperiences.removeAt(i);
	}

	removeSkill(i: number): void {
		this.skills.removeAt(i);
	}

	resetWorkExperiences(): void {
		while (this.workExperiences.length > 0) {
			this.workExperiences.removeAt(0);
		}
	}

	resetSkills(): void {
		while (this.skills.length > 0) {
			this.skills.removeAt(0);
		}
	}

	saveProfile(): void {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.workExperiences;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
		this.profileFormDisable();
	}

	saveCurrentSalary(): void {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.workExperiences;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
		this.profileFormCurrentSalaryDisable();
	}

	saveExpectedSalary(): void {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.workExperiences;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
		this.profileFormExpectedSalaryDisable();
	}

	saveMiscellaneous(): void {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.workExperiences;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
		this.profileFormMiscellaneousDisable();
	}

	cancelProfile(event): void {
		this.editMode(event, '');
	}

	cancelCurrentSalary(): void {
		this.editMode(event, '');
	}

	cancelExpectedSalary(): void {
		this.editMode(event, '');
	}

	cancelMiscellaneous(): void {
		this.editMode(event, '');
	}

	isValueUndefined(value: any): boolean {
		return isUndefined(value);
	}

	isFormGroupFieldInValid(formGroup: FormGroup, fieldName: string): boolean {
		return formGroup.get(fieldName).touched && formGroup.get(fieldName).invalid;
	}

	editMode(event, editId): void {
		this.editEvent.emit(editId);
		event.preventDefault();

		if (editId && editId === 'basic') {
			this.profileFormEnable();
		} else if (editId && editId === 'currentSalary') {
			this.profileFormCurrentSalaryEnable();
		} else if (editId && editId === 'expectedSalary') {
			this.profileFormExpectedSalaryEnable();
		} else if (editId && editId === 'miscellaneous') {
			this.profileFormMiscellaneousEnable();
		} else {
			this.profileFormDisable();
			this.profileFormCurrentSalaryDisable();
			this.profileFormExpectedSalaryDisable();
			this.profileFormMiscellaneousDisable();
		}
	}

	profileFormDisable(): void {
		this.profileForm.get('firstName').disable();
		this.profileForm.get('lastName').disable();
		this.profileForm.get('emailAddress').disable();
		this.profileForm.get('birthDate').disable();
		this.profileForm.get('maritalStatus').disable();
		this.profileForm.get('mobileNumber').disable();
		this.profileForm.get('NRIC').disable();
		this.profileForm.get('singaporeVisa').disable();
		this.profileForm.get('visaValidity').disable();
		this.profileForm.get('noticePeriod').disable();
		this.profileForm.get('noticePeriodNegotiable').disable();
	}

	profileFormEnable(): void {
		this.profileForm.get('firstName').enable();
		this.profileForm.get('lastName').enable();
		this.profileForm.get('emailAddress').enable();
		this.profileForm.get('birthDate').enable();
		this.profileForm.get('maritalStatus').enable();
		this.profileForm.get('mobileNumber').enable();
		this.profileForm.get('NRIC').enable();
		this.profileForm.get('singaporeVisa').enable();
		this.profileForm.get('visaValidity').enable();
		this.profileForm.get('noticePeriod').enable();
		this.profileForm.get('noticePeriodNegotiable').enable();
	}

	profileFormCurrentSalaryDisable(): void {
		this.profileForm.get('currentSalary.currency').disable();
		this.profileForm.get('currentSalary.annualSalary').disable();
		this.profileForm.get('currentSalary.annualBonus').disable();
		this.profileForm.get('currentSalary.allowance.transportation').disable();
		this.profileForm.get('currentSalary.allowance.housing').disable();
		this.profileForm.get('currentSalary.allowance.schooling').disable();
		this.profileForm.get('currentSalary.allowance.health').disable();
		this.profileForm.get('currentSalary.allowance.others').disable();
		this.profileForm.get('currentSalary.allowance.otherAllowanceName').disable();
		this.profileForm.get('currentSalary.allowance.totalAllowance').disable();
		this.profileForm.get('currentSalary.isOnExpatPackage').disable();
	}

	profileFormCurrentSalaryEnable(): void {
		this.profileForm.get('currentSalary.currency').enable();
		this.profileForm.get('currentSalary.annualSalary').enable();
		this.profileForm.get('currentSalary.annualBonus').enable();
		this.profileForm.get('currentSalary.allowance.transportation').enable();
		this.profileForm.get('currentSalary.allowance.housing').enable();
		this.profileForm.get('currentSalary.allowance.schooling').enable();
		this.profileForm.get('currentSalary.allowance.health').enable();
		this.profileForm.get('currentSalary.allowance.others').enable();
		this.profileForm.get('currentSalary.allowance.otherAllowanceName').enable();
		this.profileForm.get('currentSalary.allowance.totalAllowance').enable();
		this.profileForm.get('currentSalary.isOnExpatPackage').enable();
	}

	profileFormExpectedSalaryDisable(): void {
		this.profileForm.get('expectedSalary.currency').disable();
		this.profileForm.get('expectedSalary.annualSalaryPackage').disable();
		this.profileForm.get('expectedSalary.isOnExpatPackage').disable();
	}

	profileFormExpectedSalaryEnable(): void {
		this.profileForm.get('expectedSalary.currency').enable();
		this.profileForm.get('expectedSalary.annualSalaryPackage').enable();
		this.profileForm.get('expectedSalary.isOnExpatPackage').enable();
	}

	profileFormMiscellaneousDisable(): void {
		this.profileForm.get('miscellaneous.percentageTravelAccepted').disable();
		this.profileForm.get('miscellaneous.drivingLicense').disable();
	}

	profileFormMiscellaneousEnable(): void {
		this.profileForm.get('miscellaneous.percentageTravelAccepted').enable();
		this.profileForm.get('miscellaneous.drivingLicense').enable();
	}
}
