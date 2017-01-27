import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';
import * as fromRoot from '../reducers';
import * as profileAction from '../actions/profile.action';

@Component({
	selector: 'app-profile-page',
	template: `
	<div class='container'>
		<div class='container-fluid'>
			<div class='row'>
				<div class='col-md-3'>
				</div>
				<div class='col-md-6'>
					<h3>Profile</h3>
					<app-profile-view [profile]="profile$ | async"></app-profile-view>
					<button type="button" class="btn btn-warning" (click)="logout()">Sign-out</button>
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

	constructor(private store: Store<fromRoot.State>) {
		this.email$ = this.store.select(fromRoot.getUserEmail);
		this.profile$ = this.store.select(fromRoot.getUserProfile);
	}

	logout() {
		this.store.dispatch(new profileAction.ProfileLogOutAction(''));
	}
}
