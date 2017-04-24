import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

import * as fromRoot from './reducers';

@Component({
	selector: 'app-root',
	template: `
		<app-header [user]="user$ | async" [route]="route$ | async"></app-header>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div>
						<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-responsive image-banner" />
					</div>
					<div class="btn-group btn-group-vertical pull-right groupButton">
						<button type="button" class="btn btn-primary btn-lg">Profile</button>
						<button type="button" class="btn btn-basic btn-lg">Logout</button>
					</div>
				</div>
			</div>
			<nav class="col-md-12" style="font-size:large;">
				<ul class="nav-list">
					<li><a href="#"> Home </a></li>
					<li><a href="#"> About Us </a></li>
					<li><a href="/jobs"> All Job Offers </a></li>
					<li><a href="#"> Contact Us </a></li>
					<li><a href="#"> Bookmarks </a></li>
				</ul>
			</nav>
			<hr>
		</div>
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
