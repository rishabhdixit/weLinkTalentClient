import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

import * as fromRoot from './reducers';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	template: `
		<app-header [user]="user$ | async" [routerEvent]="routerEvent$ | async"></app-header>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'WeLinkTalent.com';
	user$: Observable<User>;
	routerEvent$: Observable<any>;

	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.user$ = this.store.select(fromRoot.getUser);
		this.routerEvent$ = this.router.events.pairwise();
	}
}
