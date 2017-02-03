import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';

import * as fromRoot from '../reducers';
import * as profile from '../actions/profile.action';
import * as ui from '../actions/ui.action';

@Component({
	selector: 'app-profile-page',
	template: `
	<div class='container'>
		<div class='container-fluid'>
			<div class='row'>
				<div class='col-md-12'>
					<app-profile-view
						[profile]="profile$ | async"
						[edit]="edit$ | async"
						[loading]="profileLoading$ | async"
						(editEvent)="onEdit($event)"
						(saveProfileEvent)="onProfileEvent($event)"
						(savePositionEvent)="onSavePosition($event)"
						(createPositionEvent)="onCreatePosition($event)"
						(createSkillEvent)="onCreateSkill($event)">
					</app-profile-view>
				</div>
			</div>
		</div>
	</div>
	`,
	styles: []
})
export class ProfilePageComponent {
	email$: Observable<string>;
	profile$: Observable<Profile>;
	profileLoading$: Observable<boolean>;
	edit$: Observable<string>;

	constructor(private store: Store<fromRoot.State>) {
		this.email$ = this.store.select(fromRoot.getUserEmail);
		this.profile$ = this.store.select(fromRoot.getUserProfile);
		this.profileLoading$ = this.store.select(fromRoot.getProfileLoading);
		this.edit$ = this.store.select(fromRoot.getUiEditId);
	}

	logout() {
		this.store.dispatch(new profile.ProfileLogOutAction(''));
	}

	onEdit(editId: string) {
		this.store.dispatch(new ui.FormEditMode(editId));
	}

	onProfileEvent(payload) {
		this.store.dispatch(new profile.ProfileUpdateAction(payload));
	}

	onSavePosition(payload) {
		this.store.dispatch(new profile.PositionUpdateAction(payload));
	}

	onCreatePosition(payload) {
		this.store.dispatch(new profile.PositionCreateAction(payload));
	}

	onCreateSkill(payload) {
		this.store.dispatch(new profile.SkillCreateAction(payload));
	}
}
