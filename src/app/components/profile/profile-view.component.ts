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
	months: Array<String> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	days: Array<String> = [];
	years: Array<Number> = [];
	periodYears: Array<Number> = [];

	visaValidityMonth: number;
	visaValidityDay: number;
	visaValidityYear: number;
	isVisaValidityDisable: boolean = true;

	workExperienceTimePeriods: Array<any> = [];
	timePeriod: any = {
		startDate: { month: null, day: null, year: null },
		endDate: { month: null, day: null, year: null }
	};

	isAboutYouInvalid: boolean = false;
	isMiscellaneousInvalid: boolean = false;
	isExpectedSalaryInvalid: boolean = false;
	isWorkExperiencesInvalid: boolean = false;
	isSkillsInvalid: boolean = false;

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
		this.initializeDays();
		this.initializeYears();

		this.initializeProfileForm();
		this.initializeProfileValue();

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
			name: this.fb.control('', Validators.required)
		});
	}

	addWorkExperience(): void {
		this.workExperiences.push(this.initWorkExperience());
		this.workExperienceTimePeriods.push(this.timePeriod);
	}

	addSkill(): void {
		this.skills.push(this.initSkill());
	}

	saveWorkExperiences(): void {
		if (this.workExperiences.invalid) {
			this.isWorkExperiencesInvalid = true;
			setTimeout(() => {
				this.isWorkExperiencesInvalid = false;
			}, 5000);
		} else {
			const profile = this.profileForm.value;

			delete profile.pictureUrl;
			delete profile.positions;
			delete profile.skills;

			this.saveProfileEvent.emit(profile);
		}
	}

	saveSkills(): void {
		if (this.skills.invalid) {
			this.isSkillsInvalid = true;
			setTimeout(() => {
				this.isSkillsInvalid = false;
			}, 5000);
		} else {
			const profile = this.profileForm.value;

			delete profile.pictureUrl;
			delete profile.positions;
			delete profile.workExperiences;

			this.saveProfileEvent.emit(profile);
		}
	}

	removeWorkExperience(i: number): void {
		this.workExperiences.removeAt(i);
		this.workExperienceTimePeriods.splice(i, 1);
	}

	removeSkill(i: number): void {
		this.skills.removeAt(i);
	}

	resetWorkExperiences(): void {
		while (this.workExperiences.length > 0) {
			this.workExperiences.removeAt(0);
			this.workExperienceTimePeriods.splice(0, 1);
		}
	}

	resetSkills(): void {
		while (this.skills.length > 0) {
			this.skills.removeAt(0);
		}
	}

	saveProfile(): void {
		if (!this.isAboutYouValid()) {
			this.isAboutYouInvalid = true;
			setTimeout(() => {
				this.isAboutYouInvalid = false;
			}, 5000);
		} else {
			const profile = this.profileForm.value;

			delete profile.positions;
			delete profile.workExperiences;
			delete profile.skills;

			this.saveProfileEvent.emit(profile);
			this.profileFormDisable();
		}
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
		if (this.profileForm.get('expectedSalary').invalid) {
			this.isExpectedSalaryInvalid = true;
			setTimeout(() => {
				this.isExpectedSalaryInvalid = false;
			}, 5000);
		} else {
			const profile = this.profileForm.value;

			delete profile.positions;
			delete profile.workExperiences;
			delete profile.skills;

			this.saveProfileEvent.emit(profile);
			this.profileFormExpectedSalaryDisable();
		}
	}

	saveMiscellaneous(): void {
		if (this.profileForm.get('miscellaneous').invalid) {
			this.isMiscellaneousInvalid = true;
			setTimeout(() => {
				this.isMiscellaneousInvalid = false;
			}, 5000);
		} else {
			const profile = this.profileForm.value;

			delete profile.positions;
			delete profile.workExperiences;
			delete profile.skills;

			this.saveProfileEvent.emit(profile);
			this.profileFormMiscellaneousDisable();
		}
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

	isFormControlInvalid(fieldName: string): boolean {
		return this.profileForm.get(fieldName).touched && this.profileForm.get(fieldName).invalid;
	}

	isFormGroupFieldInValid(formGroup: FormGroup, fieldName: string): boolean {
		return formGroup.get(fieldName).touched && formGroup.get(fieldName).invalid;
	}

	onChangeCurrentSalary(): void {
		if (this.profileForm.get('currentSalary.currency').value) {
			this.profileForm.get('currentSalary.annualSalary').enable();
			this.profileForm.get('currentSalary.annualBonus').enable();
		} else {
			this.profileForm.get('currentSalary.annualSalary').disable();
			this.profileForm.get('currentSalary.annualBonus').disable();
		}
	}

	onChangeExpectedSalaryCurrency(): void {
		if (this.profileForm.get('expectedSalary.currency').value) {
			this.profileForm.get('expectedSalary.annualSalaryPackage').enable();
		} else {
			this.profileForm.get('expectedSalary.annualSalaryPackage').disable();
		}
	}

	onChangeOthers(): void {
		if (this.profileForm.get('currentSalary.allowance.others').value) {
			this.profileForm.get('currentSalary.allowance.otherAllowanceName').enable();
		} else {
			this.profileForm.get('currentSalary.allowance.otherAllowanceName').disable();
		}
	}

	onChangeVisaValidity(): void {
		// new Date(Year, Month, Day)
		// Month [0 - 11]
		if (this.visaValidityMonth && this.visaValidityDay && this.visaValidityYear) {
			this.profileForm.get('visaValidity').setValue(
				new Date(this.visaValidityYear, this.visaValidityMonth, this.visaValidityDay)
			);
		}
	}

	onChangeTimePeriod(category: string, formGroup: FormGroup, i: number): void {
		// new Date(Year, Month, Day)
		// Month [0 - 11]
		if (category === 'startDate') {
			if (this.workExperienceTimePeriods[i].startDate.month && this.workExperienceTimePeriods[i].startDate.year) {
				formGroup.get('startDate').setValue(
					new Date(
						this.workExperienceTimePeriods[i].startDate.year,
						this.workExperienceTimePeriods[i].startDate.month,
						1
					)
				);
			}
		} else {
			if (this.workExperienceTimePeriods[i].endDate.month && this.workExperienceTimePeriods[i].endDate.year) {
				let tempDate = new Date(
					this.workExperienceTimePeriods[i].endDate.year,
					parseInt(this.workExperienceTimePeriods[i].endDate.month, 0) + 1,
					0
				);
				formGroup.get('endDate').setValue(
					new Date(
						this.workExperienceTimePeriods[i].endDate.year,
						this.workExperienceTimePeriods[i].endDate.month,
						tempDate.getDate()
					)
				);
			}
		}
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

	private profileFormDisable(): void {
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
		this.profileForm.get('summary').disable();
		this.isVisaValidityDisable = true;
	}

	private profileFormEnable(): void {
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
		this.profileForm.get('summary').enable();
		this.isVisaValidityDisable = false;
	}

	private profileFormCurrentSalaryDisable(): void {
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

	private profileFormCurrentSalaryEnable(): void {
		this.profileForm.get('currentSalary.currency').enable();
		this.profileForm.get('currentSalary.allowance.transportation').enable();
		this.profileForm.get('currentSalary.allowance.housing').enable();
		this.profileForm.get('currentSalary.allowance.schooling').enable();
		this.profileForm.get('currentSalary.allowance.health').enable();
		this.profileForm.get('currentSalary.allowance.others').enable();
		this.profileForm.get('currentSalary.allowance.totalAllowance').enable();
		this.profileForm.get('currentSalary.isOnExpatPackage').enable();

		if (this.profileForm.get('currentSalary.currency').value) {
			this.profileForm.get('currentSalary.annualSalary').enable();
			this.profileForm.get('currentSalary.annualBonus').enable();
		} else {
			this.profileForm.get('currentSalary.annualSalary').disable();
			this.profileForm.get('currentSalary.annualBonus').disable();
		}

		if (this.profileForm.get('currentSalary.allowance.others').value) {
			this.profileForm.get('currentSalary.allowance.otherAllowanceName').enable();
		} else {
			this.profileForm.get('currentSalary.allowance.otherAllowanceName').disable();
		}
	}

	private profileFormExpectedSalaryDisable(): void {
		this.profileForm.get('expectedSalary.currency').disable();
		this.profileForm.get('expectedSalary.annualSalaryPackage').disable();
		this.profileForm.get('expectedSalary.isOnExpatPackage').disable();
	}

	private profileFormExpectedSalaryEnable(): void {
		this.profileForm.get('expectedSalary.currency').enable();
		this.profileForm.get('expectedSalary.isOnExpatPackage').enable();

		if (this.profileForm.get('expectedSalary.currency').value) {
			this.profileForm.get('expectedSalary.annualSalaryPackage').enable();
		} else {
			this.profileForm.get('expectedSalary.annualSalaryPackage').disable();
		}
	}

	private profileFormMiscellaneousDisable(): void {
		this.profileForm.get('miscellaneous.percentageTravelAccepted').disable();
		this.profileForm.get('miscellaneous.drivingLicense').disable();
	}

	private profileFormMiscellaneousEnable(): void {
		this.profileForm.get('miscellaneous.percentageTravelAccepted').enable();
		this.profileForm.get('miscellaneous.drivingLicense').enable();
	}

	private isAboutYouValid(): boolean {
		return (
			!this.profileForm.get('firstName').invalid &&
			!this.profileForm.get('lastName').invalid &&
			!this.profileForm.get('emailAddress').invalid &&
			!this.profileForm.get('summary').invalid &&
			!this.profileForm.get('birthDate').invalid &&
			!this.profileForm.get('maritalStatus').invalid &&
			!this.profileForm.get('mobileNumber').invalid &&
			!this.profileForm.get('singaporeVisa').invalid &&
			!this.profileForm.get('visaValidity').invalid &&
			!this.profileForm.get('noticePeriod').invalid &&
			!this.profileForm.get('noticePeriodNegotiable').invalid
		);
	}

	private initializeDays(): void {
		let day = 1;
		while (day <= 31) {
			if (day < 10) {
				this.days.push('0' + day);
			} else {
				this.days.push('' + day);
			}
			day++;
		}
	}

	private initializeYears(): void {
		let currentYear = (new Date()).getFullYear();
		let year = currentYear - 10;
		let periodYear = currentYear - 30;
		while (year <= currentYear + 10) {
			this.years.push(year++);
		}

		while (periodYear <= currentYear) {
			this.periodYears.push(periodYear++);
		}
	}

	private initializeProfileForm(): void {
		this.profileForm = this.fb.group({
			firstName: this.fb.control('', Validators.required),
			lastName: this.fb.control('', Validators.required),
			headline: this.fb.control(''),
			pictureUrl: this.fb.control(''),
			emailAddress: this.fb.control('', Validators.required),
			summary: this.fb.control('', Validators.required),
			birthDate: this.fb.control('', Validators.required),
			maritalStatus: this.fb.control('', Validators.required),
			mobileNumber: this.fb.control('', Validators.required),
			NRIC: this.fb.control(''),
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
				currency: this.fb.control('', Validators.required),
				annualSalaryPackage: this.fb.control('', Validators.required),
				isOnExpatPackage: this.fb.control('', Validators.required)
			}),
			miscellaneous: this.fb.group({
				percentageTravelAccepted: this.fb.control('', Validators.required),
				drivingLicense: this.fb.control('', Validators.required)
			}),
			workExperiences: this.fb.array([]),
			skills: this.fb.array(this.profile.skills.map(() => this.initSkill()))
		});
	}

	private initializeProfileValue(): void {
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
	}
}
