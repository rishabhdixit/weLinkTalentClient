import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { routes } from './routes';
import { reducer } from './reducers';

import { LogInEffects } from'./effects/login.effects';
import { LoginService } from './services/login.service';

import { LoginComponent } from './components/login.component';
import { LinkedinLoginComponent } from  './components/linkedin-login.component';
import { OrSeperatorComponent } from './components/or-seperator.component';
import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';
import { LoggedInGuard } from './guards/logged-in.guard';

@NgModule({
	declarations: [
		AppComponent,
		LinkedinLoginComponent,
		LoginComponent,
		OrSeperatorComponent,
		LoginPageComponent,
		ProfilePageComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routes),
		StoreModule.provideStore(reducer),
		EffectsModule.run(LogInEffects),
		StoreDevtoolsModule.instrumentOnlyWithExtension({
			maxAge: 5
		})
	],
	providers: [
		{
			provide: 'api',
			useValue: environment.api
		},
		LoginService,
		LoggedInGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
