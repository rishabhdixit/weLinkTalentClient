import { Component, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';
import * as fromRoot from '../../reducers';
import * as login from '../../actions/login.action';
import { LoginService } from 'app/services/login.service';
import { routePath } from '../../routes';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<div *ngIf="isNotRegisteredUrl" class="container">
				<div class="row">
					<div class="col-md-12">
						<div>
							<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-responsive image-banner" />
						</div>
						<ul class="nav nav-pills justify-content-end">
							<li *ngIf="isLoggedIn" class="nav-item">
								<div class="btn-group btn-group-vertical pull-right groupButton">
									<div *ngIf="isNotProfileUrl && !isLoggedInAsAdmin">
										<a routerLink="/profile">
											<button type="button" class="btn btn-primary btn-lg profileButton">Profile</button>
										</a>
									</div>
									<a routerLink="#">
										<button type="button" class="btn btn-basic btn-lg" style="border-radius: 0;" (click)="logout($event)">Logout</button>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div *ngIf="!isLoggedInAsAdmin" class="row">
					<nav class="col-md-12" style="font-size:large;">
						<ul class="nav-list">
							<li><a routerLink="/home"><h5>Home</h5></a></li>
							<li><a routerLink="/about-us"><h5>About Us</h5></a></li>
							<li><a routerLink="/jobs"><h5>All Job Offers</h5></a></li>
							<!--<li><a routerLink="/contact-us"><h5>Contact Us</h5></a></li>-->
							<li><a routerLink="/bookmarks"><h5>Bookmarks</h5></a></li>
						</ul>
					</nav>
				</div>
				<div *ngIf="isLoggedInAsAdmin" class="row">
					<nav class="col-md-12" style="font-size:large;">
						<ul class="nav-list">
							<li><a routerLink="/admin/home"><h5>Home</h5></a></li>
							<li><a routerLink="#"><h5>Account Setting</h5></a></li>
							<li><a routerLink="#"><h5>Billing</h5></a></li>
							<li><a routerLink="/applicants"><h5>Applicants</h5></a></li>							
						</ul>
					</nav>
				</div>
				<hr>
			</div>
		</header>
	`,
	styles: [`
		.image-banner{
			width: 50%;
		}
		.nav-list{
			list-style: none;
			padding: 0;
			width: 100%;
		}
		.nav-list li {
			display: inline-block;
			width: 20%; /*19%*/
			text-align: center;
		}
		.groupButton{
			margin-top: -140px;
		}
		.profileButton {
			background: #57148D;
			width:111px;
			border-radius: 0;
		}
		a {
			color: #57148D;
		}
	`]
})
export class HeaderComponent {
	@Input() user: User;
	@Input() route: NavigationEnd;

	constructor(private store: Store<fromRoot.State>, private loginService: LoginService) { }

	logout(event) {
		event.preventDefault();
		this.store.dispatch(new login.LogoutAction(''));
	}

	get isNotLoginUrl() {
		if (this.route && this.route.url === '/login') {
			return false;
		}
		return true;
	}

	get isNotProfileUrl() {
		if (this.route && this.route.url === '/profile') {
			return false;
		}
		return true;
	}

	get isLoggedIn() {
		return this.loginService.isLoggedIn();
	}

	get isNotRegisteredUrl() {
		let validRoutes = routePath.filter((url) => this.route
			&& this.route.url.startsWith('/' + url));

		if (validRoutes.length === 0) {
			return false;
		}
		return true;
	}

	get isLoggedInAsAdmin() {
		return this.loginService.isLoggedInAsAdmin(this.user);
	}
}
