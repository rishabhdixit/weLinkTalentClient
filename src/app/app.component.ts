import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

import * as fromRoot from './reducers';

@Component({
	selector: 'app-root',
	template: `
		<app-header [user]="user$ | async" [route]="route$ | async"></app-header>
		<router-outlet></router-outlet>
		<app-footer></app-footer>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'WeLinkTalent.com';

	user$: Observable<User>;
	route$: Observable<NavigationEnd>;

	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.user$ = this.store.select(fromRoot.getUser);
		this.route$ = this.router.events.filter((event) => event instanceof NavigationEnd);
	}
}
