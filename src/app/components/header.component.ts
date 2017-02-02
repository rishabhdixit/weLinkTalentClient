import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Profile } from '../models/profile.model';
import * as fromRoot from '../reducers';
import * as profile from '../actions/profile.action';

@Component({
	selector: 'app-header',
	template: `
<ul class="nav nav-pills justify-content-end">
    <li *ngIf="!isLoggedIn" class="nav-item">
        <a routerLink="/login" class="nav-link label">Sign-In</a>
    </li>
    <li *ngIf="isLoggedIn" class="nav-item">
        <span class="nav-link label">{{profile.emailAddress}}</span>
    </li> 
     <li *ngIf="isLoggedIn" class="nav-item">
        <a href="#" class="nav-link label" (click)="logout()">Sign-Out</a>
    </li> 
</ul>
<hr>
	`,
	styles: [`
	.label{
		line-height: 3px;
		color: #337ab7;
		margin: auto;
    padding-top: 18px;
    font-weight: 500;
    text-decoration: underline;
	}
`]
})
export class HeaderComponent {
	@Input() profile: Profile;

	constructor(private store: Store<fromRoot.State>) { }

	logout() {
		this.store.dispatch(new profile.ProfileLogOutAction(''));
	}

	get isLoggedIn() {
		return this.profile.emailAddress ? true : false;
	}
}
