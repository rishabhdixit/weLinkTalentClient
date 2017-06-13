import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from '../models/user.model';
import * as fromRoot from '../reducers';
import * as login from '../actions/login.action';
import { LoginService } from 'app/services/login.service';

@Component({
	selector: 'app-header',
	template: `
		<header>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div>
							<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-responsive image-banner" />
						</div>
						<ul class="nav nav-pills justify-content-end">
							<li *ngIf="isLoggedIn" class="nav-item">
								<div class="btn-group btn-group-vertical pull-right groupButton">
									<div *ngIf="isNotProfileUrl">
										<a routerLink="/profile">
											<button type="button" class="btn btn-primary btn-lg" style="width:111px;">Profile</button>
										</a>
									</div>
									<a routerLink="/login">
										<button type="button" class="btn btn-basic btn-lg" (click)="logout($event)">Logout</button>
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<nav class="col-md-12" style="font-size:large;">
					<ul class="nav-list">
						<li><a routerLink="/home"> Home </a>
						</li>
						<li><a routerLink="/about-us"> About Us </a>
						</li>
						<li><a routerLink="/jobs"> All Job Offers </a>
						</li>
						<li><a routerLink="#"> Contact Us </a>
						</li>
						<li><a routerLink="#"> Bookmarks </a>
						</li>
					</ul>
				</nav>
				<hr>
			</div>
		</header>
	`,
	styles: [`
		.label{
			color: #337ab7;
			font-weight: 500;
			text-decoration: underline;
		}
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
			width: 19%;
			text-align: center;
		}

		.groupButton{
			margin-top: -140px;
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
		this.route.url = '/login/';
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
}
