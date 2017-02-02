import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { User } from './models/user.model';

import * as fromRoot from './reducers';

@Component({
	selector: 'app-root',
	template: `
		<app-header [user]="user$ | async"></app-header>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'WeLinkTalent.com';
	user$: Observable<User>;

	constructor(private store: Store<fromRoot.State>, private loginService: LoginService) {
		this.user$ = this.store.select(fromRoot.getUser);
	}
}
