import { Routes } from '@angular/router';

import { ProfileResolve } from './resolves/profile.resolve';
// import { UserResolve } from './resolves/user.resolve';

import { JobExistsGuard } from './guards/job-exist.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { JobApplicationConceptGuard } from './guards/job-application-concept.guard';
import { JobApplicationFormGuard } from './guards/job-application-form.guard';
import { JobApplicationFormReferenceGuard } from './guards/job-application-form-reference.guard';
import { JobApplicationFormSuccessGuard } from './guards/job-application-form-success.guard';
import { RefereeFeedbackGuard } from './guards/referee-feedback.guard';

import { ApplicationConceptPageComponent } from './containers/application-concept-page.component';
import { ApplicationFormPageComponent } from './containers/application-form-page.component';
import { ApplicationReferenceFormPageComponent } from './containers/application-reference-form-page.component';
import { ThankYouPageComponent } from './containers/thank-you-page.component';
import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobDetailPageComponent } from './containers/job-detail-page.component';
import { AboutUsPageComponent } from './containers/about-us-page.component';
import { HomePageComponent } from './containers/home-page.component';
import { RefereeFeedbackPageComponent } from './containers/referee-feedback-page.component';

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
		canActivate: [JobApplicationConceptGuard],
		// Step 1 - application concept
	},
	{
		path: 'application-form',
		component: ApplicationFormPageComponent,
		canActivate: [JobApplicationFormGuard],
		// Step 2 - Fill up application form
	},
	{
		path: 'application-form2',
		component: ApplicationReferenceFormPageComponent,
		canActivate: [JobApplicationFormReferenceGuard],
		// Step 3 - Fill up reference
	},
	{
		path: 'thank-page',
		component: ThankYouPageComponent,
		canActivate: [JobApplicationFormSuccessGuard],
		// Step 4 - Last stage
	},
	{
		path: 'home',
		component: HomePageComponent,
	},
	{
		path: 'referee-feedback/:application-form',
		component: RefereeFeedbackPageComponent,
		canActivate: [RefereeFeedbackGuard],
	},
	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
];
