import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { Profile } from './models/profile.model';

import * as fromRoot from './reducers';

@Component({
	selector: 'app-root',
	template: `
	<app-header [profile]="profile$ | async"></app-header>     			
	<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'WeLinkTalent.com';
	profile$: Observable<Profile>;

	constructor(private store: Store<fromRoot.State>, private loginService: LoginService) {
		this.profile$ = this.store.select(fromRoot.getUserProfile);
	}
}
