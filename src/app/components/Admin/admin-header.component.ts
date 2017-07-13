import { Component, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
	selector: 'app-admin-header',
	template: `
		<header>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div><!--./assets/images/company-banner.png-->
							<img alt="We Link Talent" src="../../assets" class="img-responsive image-banner" />
						</div>
						<ul class="nav nav-pills justify-content-end">
							<li *ngIf="isLoggedIn" class="nav-item">
								<div class="btn-group btn-group-vertical pull-right groupButton">
									<div *ngIf="isNotProfileUrl">
										<a routerLink="/profile">
											<button type="button" class="btn btn-primary btn-lg profileButton">Profile</button>
										</a>
									</div>
									<a routerLink="/login">
										<button type="button" class="btn btn-basic btn-lg" style="border-radius: 0;" (click)="logout($event)">Logout</button>
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
					</ul>
				</nav>
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
			width: 19%;
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

export class AdminHeaderComponent {
	@Input() user: User;
	@Input() route: NavigationEnd;

	constructor(private store: Store<fromRoot.State>, private loginService: LoginService) { }
}
