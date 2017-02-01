import { Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { ProfileResolve } from './resolves/profile.resolve';

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
		path: 'profile',
		canActivate: [ LoggedInGuard ],
		component: ProfilePageComponent,
		resolve: {
			loaded: ProfileResolve
		}
	},
	{
		path: 'jobs',
		component: JobSearchPageComponent
	}
];
