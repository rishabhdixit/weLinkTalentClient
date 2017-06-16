import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	AbstractControl,
	ValidatorFn,
	FormArray
} from '@angular/forms';

import { Profile } from '../models/profile.model';

@Component({
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
	@Output() savePositionEvent = new EventEmitter<any>();
	@Output() createPositionEvent = new EventEmitter<any>();
	@Output() createSkillEvent = new EventEmitter<any>();
	@Output() removePositionEvent = new EventEmitter<any>();
	// newly added
	@Output() saveProfileUserInfoEventEmitter = new EventEmitter<Profile>();

	profileForm: FormGroup;

	get positions(): FormArray{
		return <FormArray>this.profileForm.get('positions');
	}

	get skills(): FormArray{
		return <FormArray>this.profileForm.get('skills');
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.profileForm = this.fb.group({
			firstName:    ['', Validators.required],
			lastName:     ['', Validators.required],
			headline:     ['', Validators.required],
			pictureUrl: ['', Validators.required],
			emailAddress: ['', Validators.required],
			summary:      ['', Validators.required],
			positions:    this.fb.array(this.profile.positions.map(() => this.positionFormGroup())),
			skills:       this.fb.array(this.profile.skills.map(() => this.skillsFormGroup())),
		});

		this.profileForm.patchValue({
			firstName:    this.profile.firstName,
			lastName:     this.profile.lastName,
			headline:     this.profile.headline,
			emailAddress: this.profile.emailAddress,
			pictureUrl: this.profile.pictureUrl,
			summary:      this.profile.summary,
			positions:    this.profile.positions,
			skills:       this.profile.skills,
		});


	}

	positionFormGroup(): FormGroup {
		return this.fb.group({
			title:    ['', Validators.required],
			company:  this.fb.group({ name: ['', Validators.required] }),
			location: this.fb.group({ name: '' }),
			responsibilities:  ['', Validators.required]
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
	}

	saveProfile() {
		const profile = this.profileForm.value;

		delete profile.positions;
		delete profile.skills;

		this.saveProfileEvent.emit(profile);
	}

	cancelProfile(event) {
		this.editMode(event, '');
	}

	savePosition(index) {
		const position = this.positions.value[index];
		const id = this.profile.positions[index] ?
			this.profile.positions[index].id : null;

		if (id) {
			this.savePositionEvent.emit({id, position});
		} else {
			this.createPositionEvent.emit({position});
		}
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
		const skill = this.skills.value[index];

		this.createSkillEvent.emit({ skill });
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

	removePosition(index) {
		const position = this.positions.value[index];
		this.removePositionEvent.emit({ position });
	}

	// added

	// onConfirmButtonClicked() {
    //
	// 	let profileSave = new Profile();
    //
	// 	profileSave.birthDate = this.profile.birthDate;
	// 	profileSave.NRIC = this.profile.NRIC;
	// 	profileSave.email = this.profile.email;
	// 	profileSave.singaporeVisa = this.profile.singaporeVisa;
	// 	profileSave.noticePeriod = this.profile.noticePeriod;
	// 	profileSave.maritalStatus = this.profile.maritalStatus;
	// 	profileSave.mobile = this.profile.mobile;
	// 	profileSave.children = this.profile.children;
	// 	profileSave.validityEnd = this.profile.validityEnd;
	// 	profileSave.negotiable = this.profile.negotiable;
	// 	profileSave.basePerMonth = this.profile.basePerMonth;
	// 	profileSave.bonus = this.profile.bonus;
	// 	profileSave.allowance = this.profile.allowance;
	// 	profileSave.incentives = this.profile.incentives;
	// 	profileSave.bonusReceived = this.profile.bonusReceived;
	// 	profileSave.calculation = this.profile.calculation;
	// 	profileSave.description = this.profile.description;
	// 	profileSave.vestingPeriod = this.profile.vestingPeriod;
    //
	// 	console.log(profileSave);
    //
	// 	this.saveProfileUserInfoEventEmitter.emit(profileSave);
	// }

}
