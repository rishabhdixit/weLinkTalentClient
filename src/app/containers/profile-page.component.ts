import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';

import * as fromRoot from '../reducers';
import * as profile from '../actions/profile.action';
import * as position from '../actions/profile-position.action';
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
						(editEvent)="editEvent($event)"
						(savePositionEvent)="savePositionEvent($event)">
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
	edit$: Observable<string>;

	constructor(private store: Store<fromRoot.State>) {
		this.email$ = this.store.select(fromRoot.getUserEmail);
		this.profile$ = this.store.select(fromRoot.getUserProfile);
		this.edit$ = this.store.select(fromRoot.getUiEditId);
	}

	logout() {
		this.store.dispatch(new profile.ProfileLogOutAction(''));
	}

	editEvent(editId: string) {
		this.store.dispatch(new ui.FormEditMode(editId));
	}

	savePositionEvent(payload) {
		this.store.dispatch(new position.PositionUpdateAction(payload));
	}
}
