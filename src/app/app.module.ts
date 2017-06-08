import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthHttpServiceFactory } from './auth-http.factory';

import { routes } from './routes';
import { reducer } from './reducers';
import { ComponentsModule } from './components';

import { ProfileResolve } from './resolves/profile.resolve';

import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { JobExistsGuard } from './guards/job-exist.guard';
import { JobApplicationConceptGuard } from './guards/job-application-concept.guard';
import { JobApplicationGuard } from './guards/job-application.guard';
import { JobApplicationFormGuard } from './guards/job-application-form.guard';
import { JobApplicationFormReferenceGuard } from './guards/job-application-form-reference.guard';
import { JobApplicationFormSuccessGuard } from './guards/job-application-form-success.guard';

import { LoginService } from './services/login.service';
import { ProfileService } from './services/profile.service';
import { JobService } from './services/job.service';
import { BookmarkService } from './services/bookmark.service';
import { JobApplicationService } from './services/job-application.service';

import { ProfileEffects } from './effects/profile.effects';
import { LogInEffects } from './effects/login.effects';
import { JobEffects } from './effects/job.effects';
import { ApplicationEffects } from './effects/application.effects';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobDetailPageComponent } from './containers/job-detail-page.component';
import { AboutUsPageComponent } from './containers/about-us-page.component';
import { ApplicationConceptPageComponent } from 'app/containers/application-concept-page.component';
import { ApplicationPageViewComponent } from './containers/application-page-view.component';
import { ApplicationPageView2Component } from './containers/application-page-view2.component';
import { ThankYouPageComponent } from './containers/thank-you-page.component';

// Library for Star Rating
import { StarRatingModule } from 'angular-star-rating';
import { RatingModule } from 'ng2-rating';

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		ProfilePageComponent,
		JobSearchPageComponent,
		JobDetailPageComponent,
		AboutUsPageComponent,
		ApplicationConceptPageComponent,
		ApplicationPageViewComponent,
		ApplicationPageView2Component,
		ThankYouPageComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ComponentsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		StoreModule.provideStore(reducer),
		EffectsModule.run(LogInEffects),
		EffectsModule.run(ProfileEffects),
		EffectsModule.run(JobEffects),
		EffectsModule.run(ApplicationEffects),
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		}),
		ReactiveFormsModule,
		StarRatingModule,
		RatingModule,
		NgxPaginationModule
	],
	providers: [
		{
			provide: 'api',
			useValue: environment.api
		},
		{
			provide: AuthHttp,
			useFactory: AuthHttpServiceFactory,
			deps: [Http, RequestOptions]
		},
		LoginService,
		ProfileService,
		JobService,
		BookmarkService,
		JobApplicationService,
		ProfileResolve,
		LoggedInGuard,
		CandidateGuard,
		JobApplicationGuard,
		JobExistsGuard,
		JobApplicationConceptGuard,
		JobApplicationFormGuard,
		JobApplicationFormReferenceGuard,
		JobApplicationFormSuccessGuard,
	],
	bootstrap: [
		AppComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class AppModule {
}
