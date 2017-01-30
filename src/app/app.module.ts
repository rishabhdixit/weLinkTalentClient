import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

import { LogInEffects } from'./effects/login.effects';
import { LoginService } from './services/login.service';
import { ProfileEffects } from './effects/profile.effects';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { JobService } from './services/job.service';
import { JobEffects } from './effects/job.effects';

import { LoginComponent } from './components/login.component';
import { LinkedinLoginComponent } from  './components/linkedin-login.component';
import { OrSeperatorComponent } from './components/or-seperator.component';
import { ProfileViewComponent } from './components/profile-view.component';
import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobViewComponent } from './components/job-view.component';
import { JobSeachComponent } from './components/job-seach.component';
import { PaginationComponent } from './components/pagination.component';

@NgModule({
	declarations: [
		AppComponent,
		LinkedinLoginComponent,
		LoginComponent,
		OrSeperatorComponent,
		ProfileViewComponent,
		LoginPageComponent,
		ProfilePageComponent,
		JobSearchPageComponent,
		JobViewComponent,
		JobSeachComponent,
		PaginationComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		StoreModule.provideStore(reducer),
		EffectsModule.run(LogInEffects),
		EffectsModule.run(ProfileEffects),
		EffectsModule.run(JobEffects),
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		})
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
		LoggedInGuard,
		CandidateGuard,
		JobService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
