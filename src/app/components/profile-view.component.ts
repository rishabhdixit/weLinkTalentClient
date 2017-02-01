import { Component, Input } from '@angular/core';
import { Profile } from '../models/profile.model';

@Component({
	selector: 'app-profile-view',
	templateUrl: 'profile-view.component.html',
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
