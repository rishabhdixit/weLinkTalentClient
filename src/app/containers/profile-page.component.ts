import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';

import * as fromRoot from '../reducers';
import {Observable} from 'rxjs';

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
								<h1>Welcome {{ userEmail$ | async}}</h1>
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
	userEmail$: Observable<string>;

	constructor(private store: Store<fromRoot.State>) {
		this.userEmail$ = this.store.select(fromRoot.getUserEmail);
	}



}
