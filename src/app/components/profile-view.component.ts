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

	profileForm: FormGroup;

	get positions(): FormArray{
		return <FormArray>this.profileForm.get('positions');
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.profileForm = this.fb.group({
			firstName:    '',
			lastName:     '',
			headline:     '',
			emailAddress: '',
			positions:    this.fb.array(
				this.profile.positions.map(() => this.positionFormGroup())
			),
		});

		this.profileForm.patchValue({
			firstName:    this.profile.firstName,
			lastName:     this.profile.lastName,
			headline:     this.profile.headline,
			emailAddress: this.profile.emailAddress,
			positions:    this.profile.positions,
		});
	}

	positionFormGroup(): FormGroup {
		return this.fb.group({
			title:    '',
			company:  this.fb.group({ name: '' }),
			location: this.fb.group({ name: '' }),
			summary:  ''
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
			this.savePositionEvent.emit({ id, position });
		} else {
			this.createPositionEvent.emit({ position });
		}
	}

	addPosition(event, editId) {
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
}
