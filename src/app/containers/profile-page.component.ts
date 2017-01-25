import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import { User } from '../models/user.model';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-profile-page',
	template: `
  <div class='container'>
		<div class='container-fluid'>
				<br>
				<br>
				<div class='row'>
						<div class='col-md-3'>
						</div>
						<div class='col-md-6'>
								<h1>Welcome {{displayname}}</h1>
						</div>
						<div class='col-md-3'>
						</div>
				</div>
		</div>		
	</div>	
  `,
	styles: []
})
export class ProfilePageComponent {
	user: User;

	constructor(private store: Store<fromRoot.State>) {
		this.store.select(fromRoot.getUser)
			.subscribe((user: User 	) => this.user = user);
	}

	get displayname() {
		return this.user.displayname;
	}

}
