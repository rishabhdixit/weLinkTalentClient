import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { LogInEffects } from'./effects/login.effects';
import { LoginService } from './services/login.service';
import { ProfileEffects } from './effects/profile.effects';
import { ProfileService } from './services/profile.service';
import { ProfileResolve } from './resolves/profile.resolve';
import { LoggedInGuard } from './guards/logged-in.guard';
import { CandidateGuard } from './guards/candidate.guard';
import { JobExistsGuard } from './guards/job-exist.guard';
import { JobService } from './services/job.service';
import { JobEffects } from './effects/job.effects';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { JobSearchPageComponent } from './containers/job-search-page.component';
import { JobDetailPageComponent } from './containers/job-detail-page.component';
import { AboutUsPageComponent } from './containers/about-us-page.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent,
		ProfilePageComponent,
		JobSearchPageComponent,
		JobDetailPageComponent,
		AboutUsPageComponent
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
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		}),
		ReactiveFormsModule
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
		ProfileResolve,
		LoggedInGuard,
		CandidateGuard,
		JobService,
		JobExistsGuard,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
