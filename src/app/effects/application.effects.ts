import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {JobApplicationService} from '../services/job-application.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import * as application from '../actions/job-application.action';
import {effects} from '@ngrx/effects/src/effects-subscription';

@Injectable()
export class ApplicationEffects {


	@Effect({dispatch: false})
	signInSuccess$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_LOAD)
		.do(() => this.router.navigate(['/application-form']));

	@Effect()
	saveApplication$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_SUBMIT)
		.map((action: application.ApplicationFormSubmitAction) => action.payload)
		.switchMap((payload) =>
			this.JobApplicationService.saveApplication(payload)
				.map((data) => new application.ApplicationFormSubmitSuccessAction(data)));


	@Effect({dispatch: false})
	saveApplicationSuccess$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_SUBMIT_SUCCESS)
		.do(() => this.router.navigate(['/application-form2']));

	@Effect({dispatch: false})
	loadReferenceForm$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_LOAD)
		.do(() => this.router.navigate(['/application-form2']));

	// @Effect()
	// saveReference$: Observable<Action> = this.actions
	// 	.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT)
	// 	.map((action: application.ApplicationReferenceFormSubmitAction) => action.payload)
	// 	.switchMap((payload) =>
	// 		this.JobApplicationService.saveReference(payload)
	// 			.map((data) => this.application.ApplicationReferenceFormSubmitAction(data)));
    //
	// @Effect({dispatch : false})
	// saveReferenceSuccess$: Observable<Action> = this.actions
	// 	.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS)
	// 	.do(() => this.router.navigate(['/thank-page']));

	constructor(private actions: Actions,
							private JobApplicationService: JobApplicationService,
							private router: Router) {
	}
}
