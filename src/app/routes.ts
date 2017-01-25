import { Routes } from '@angular/router';

import { LoginPageComponent } from './containers/login-page.component';
import { ProfilePageComponent } from './containers/profile-page.component';

import { LoggedInGuard } from './guards/logged-in.guard';

export const routes: Routes = [
	{
		path: '',
		component: LoginPageComponent
	},
	{
		path: 'login',
		component: LoginPageComponent
	},
	{
		path: 'home',
		canActivate: [LoggedInGuard],
		component: ProfilePageComponent,
	},
];
