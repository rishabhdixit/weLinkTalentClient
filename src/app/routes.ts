import { Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';

export const routes: Routes = [
	{
		path: '',
		canActivate: [ CandidateGuard ],
		component: LoginPageComponent
	},
	{
		path: 'login',
		canActivate: [ CandidateGuard ],
		component: LoginPageComponent
	},
	{
		path: 'home',
		canActivate: [ LoggedInGuard ],
		component: ProfilePageComponent,
	},
];
