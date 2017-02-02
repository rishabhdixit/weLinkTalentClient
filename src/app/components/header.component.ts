import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../models/user.model';
import * as fromRoot from '../reducers';
import * as profile from '../actions/profile.action';

@Component({
	selector: 'app-header',
	template: `
		<ul *ngIf="!isLoggedInUrl"  class="nav nav-pills justify-content-end">
				<li *ngIf="!isLoggedIn" class="nav-item">
						<a routerLink="/login" class="nav-link label">Sign-In</a>
				</li>
				<li *ngIf="isLoggedIn" class="nav-item">
						<span class="nav-link label">{{ user?.email }}</span>
				</li>
				 <li *ngIf="isLoggedIn" class="nav-item">
						<a href="#" class="nav-link label" (click)="logout()">Sign-Out</a>
				</li>
		</ul>
	`,
	styles: [`
		ul {
			border-bottom: 1px solid rgba(0,0,0,.15);
		}
		.label{
			color: #337ab7;
			font-weight: 500;
			text-decoration: underline;
		}
	`]
})
export class HeaderComponent {
	@Input() user: User;
	@Input() routerEvent: any;

	constructor(private store: Store<fromRoot.State>) { }

	logout() {
		this.store.dispatch(new profile.ProfileLogOutAction(''));
	}

	get isLoggedIn() {
		return this.user ? this.user.email : false;
	}

	get isLoggedInUrl() {
		if (this.routerEvent && this.routerEvent[1].url === '/login') {
			return true;
		}
		return false;
	}
}
