import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from '../models/user.model';
import * as fromRoot from '../reducers';
import * as login from '../actions/login.action';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<ul *ngIf="isNotLoginUrl" class="nav nav-pills justify-content-end">
					<li *ngIf="!isLoggedIn" class="nav-item">
							<a routerLink="/login" class="nav-link label">Sign-In</a>
					</li>
					<li *ngIf="isLoggedIn" class="nav-item">
							<span class="nav-link label">{{ user?.email }}</span>
					</li>
					 <li *ngIf="isLoggedIn" class="nav-item">
							<a href="#" class="nav-link label" (click)="logout($event)">Sign-Out</a>
					</li>
			</ul>
		</header>
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
	@Input() route: NavigationEnd;

	constructor(private store: Store<fromRoot.State>) { }

	logout(event) {
		event.preventDefault();

		this.store.dispatch(new login.LogoutAction(''));
	}

	get isLoggedIn() {
		return this.user ? this.user.email : false;
	}

	get isNotLoginUrl() {
		if (this.route && this.route.url === '/login') {
			return false;
		}

		return true;
	}
}
