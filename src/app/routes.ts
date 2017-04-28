import { Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobDetailPageComponent } from './containers/job-detail-page.component';
import { AboutUsPageComponent } from './containers/about-us-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { ProfileResolve } from './resolves/profile.resolve';
// import { UserResolve } from './resolves/user.resolve';
import { JobExistsGuard } from './guards/job-exist.guard';
import { ApplicationConceptPageComponent } from 'app/containers/application-concept-page.component';

export const routes: Routes = [
	{
		path: '',
		component: JobSearchPageComponent
	},
	{
		path: 'login',
		canActivate: [CandidateGuard],
		component: LoginPageComponent
	},
	{
		path: 'profile',
		canActivate: [LoggedInGuard],
		component: ProfilePageComponent,
		resolve: { loaded: ProfileResolve }
	},
	{
		path: 'jobs',
		component: JobSearchPageComponent,
		// resolve: { loaded: UserResolve }
	},
	{
		path: 'jobs/:id',
		canActivate: [JobExistsGuard],
		component: JobDetailPageComponent,
		// resolve: { loaded: UserResolve }
	},
	{
		path: 'about-us',
		component: AboutUsPageComponent,
	},
	{
		path: 'application-concept',
		component: ApplicationConceptPageComponent,
	}
];
