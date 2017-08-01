import { Routes } from '@angular/router';

import { ProfileResolve } from './resolves/profile.resolve';
import { UserResolve } from './resolves/user.resolve';

import { JobExistsGuard } from './guards/job-exist.guard';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { JobApplicationConceptGuard } from './guards/job-application-concept.guard';
import { JobApplicationFormGuard } from './guards/job-application-form.guard';
import { JobApplicationFormReferenceGuard } from './guards/job-application-form-reference.guard';
import { JobApplicationFormSuccessGuard } from './guards/job-application-form-success.guard';
import { RefereeFeedbackGuard } from './guards/referee-feedback.guard';
import { JobAppliedExistsGuard } from './guards/job-applied-exist-guard';

import { ApplicationConceptPageComponent } from './containers/application-concept-page.component';
import { ApplicationFormPageComponent } from './containers/application-form-page.component';
import { ApplicationReferenceFormPageComponent } from './containers/application-reference-form-page.component';
import { ThankYouPageComponent } from './containers/thank-you-page.component';
import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobDetailPageComponent } from './containers/job-detail-page.component';
import { AboutUsPageComponent } from './containers/about-us-page.component';
import { CandidateHomePageComponent } from './containers/candidate-home-page.component';
import { RefereeFeedbackPageComponent } from './containers/referee-feedback-page.component';
import { RefereeFeedbackThankPageComponent } from './containers/referee-feedback-thank-page.component';
import { BookmarkPageComponent } from './containers/bookmark-page.component';
import { ErrorPageComponent } from './containers/error-page.component.';
import { AdminHomePageComponent } from './containers/Admin/admin-home-page.component';
import { JobAppliedPageComponent } from './containers/job-applied-page.component';
import { AdminCreateJobPageComponent } from './containers/Admin/admin-create-job-page.component';
import { AdminEditJobPageComponent } from './containers/Admin/admin-edit-job-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{
		path: 'index',
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
		resolve: { loaded: UserResolve }
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
		path: 'referee-thank-page',
		component: RefereeFeedbackThankPageComponent,
	},
	{
		path: 'home',
		component: CandidateHomePageComponent,
		canActivate: [LoggedInGuard],
	},
	{
		path: 'referee-feedback',
		component: RefereeFeedbackPageComponent,
		canActivate: [RefereeFeedbackGuard],
		resolve: { loaded: UserResolve }
	},
	{
		path: 'bookmarks',
		component: BookmarkPageComponent,
		canActivate: [LoggedInGuard],
	},
	{
		path: 'job-application/:id',
		component: JobAppliedPageComponent,
		canActivate: [JobAppliedExistsGuard],
		resolve: { loaded: UserResolve }
	},
	{
		path: 'admin/home',
		component: AdminHomePageComponent,
		canActivate: [LoggedInGuard], // TODO - need to fix (if directly typed in address bar)
		resolve: { loaded: UserResolve }
	},
	{
		path: 'admin/create-job',
		component: AdminCreateJobPageComponent,
		canActivate: [LoggedInGuard], // TODO - need to fix (if directly typed in address bar)
		resolve: { loaded: UserResolve }
	},
	{
		path: 'admin/edit-job/:id',
		component: AdminEditJobPageComponent,
		canActivate: [
			LoggedInGuard,
			JobExistsGuard
		], // TODO - need to fix (if directly typed in address bar)
		resolve: { loaded: UserResolve }
	},
	{
		path: '**',
		component: ErrorPageComponent,
	}
	// otherwise redirect to home
	// { path: '**', redirectTo: '' }
];


// Note : for header handling purposes
export const routePath = routes.map((route) => {
	if (route.path !== '**') {
		return route.path.replace(':id', '');
	}
});
