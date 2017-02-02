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
	@Output() editEvent = new EventEmitter<string>();
	@Output() savePositionEvent = new EventEmitter<any>();

	profileForm: FormGroup;

	get positions(): FormArray{
		return <FormArray>this.profileForm.get('positions');
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.profileForm = this.fb.group({
			firstName: '',
			lastName:  '',
			headline:  '',
			positions: this.fb.array([this.positionFormGroup()]),
		});

		this.profileForm.patchValue({
			firtName:  this.profile.firstName,
			lastName:  this.profile.lastName,
			headline:  this.profile.headline,
			positions: this.profile.positions,
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

	savePosition(index) {
		const position = Object.assign(
			{},
			{ id: this.profile.positions[index].id },
			this.positions.value[index],
		);

		console.log(position);

		this.savePositionEvent.emit(position);
	}
}
