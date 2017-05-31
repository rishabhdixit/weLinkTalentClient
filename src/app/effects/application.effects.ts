import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as application from '../actions/job-application.action';

@Injectable()
export class ApplicationEffects {


	@Effect({ dispatch: false })
	signInSuccess$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATON_FORM_LOAD)
		.do(() => this.router.navigate(['/application-form']));

	constructor(private actions: Actions, private router: Router) {}
}
