import { Component, Input } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
	selector: 'app-profile-view',
	template: `
		<div class="row">
			<div class="col-md-2">
				<img *ngIf="profile.pictureUrl" [src]="profile.pictureUrl"/>
			</div>
			<div class="col-md-10">
				<p>{{ profile.firstName }} {{ profile.lastName }}</p>
				<p>{{ profile.headline }}</p>
				<p>{{ profile.emailAddress }}</p>
			</div>
			<div class="col-md-12">
				<h3>Work history</h3>
				<ul>
					<li *ngFor="let position of profile.positions">
						<h4>{{ position.company.name }} <small>{{ position.location.name }}</small></h4>
						<p>{{ position.title }}</p>
						<p>{{ position.summary }}</p>
					</li>
				</ul>
			</div>
		</div>
	`,
	styles: [`
		p {
			margin-bottom: 0px;
		}
		ul {
			list-style: none;
			padding-left: 0px;
		}
	`]
})
export class ProfileViewComponent {
	@Input() profile: Profile;

	constructor() {}
}
