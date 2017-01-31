import { Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';

export const routes: Routes = [
	{
		path: '',
		component: JobSearchPageComponent
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
	{
		path: 'jobs',
		component: JobSearchPageComponent
	}
];
