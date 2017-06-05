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
	applicationConceptLoad$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_CONCEPT_LOAD)
		.do(() => this.router.navigate(['/application-concept']));


	@Effect({dispatch: false})
	applicationFormLoad$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_LOAD)
		.do(() => this.router.navigate(['/application-form']));

	@Effect()
	saveApplication$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_SUBMIT)
		.map((action: application.ApplicationFormSubmitAction) => action.payload)
		.switchMap((payload) =>
			this.jobApplicationService.saveApplication(payload)
				.map((data) => new application.ApplicationFormSubmitSuccessAction(data)));


	@Effect({dispatch: false})
	saveApplicationSuccess$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_FORM_SUBMIT_SUCCESS)
		.do(() => this.router.navigate(['/application-form2']));


	@Effect({dispatch: false})
	referenceFormLoad$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_LOAD)
		.do(() => this.router.navigate(['/application-form2']));

	@Effect()
	saveReference$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT)
		.map((action: application.ApplicationReferenceFormSubmitAction) => action.payload)
		.switchMap((payload) =>
			this.jobApplicationService.saveReference(payload)
				.map((data) => new application.ApplicationReferenceFormSubmitSuccessAction(data)))
				.catch(() => Observable.of(new application.ApplicationReferenceFormSubmitFailAction(null)));

	@Effect({dispatch: false})
	saveReferenceSuccess$: Observable<Action> = this.actions
		.ofType(application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS)
		.do(() => this.router.navigate(['/thank-page']));

	constructor(private actions: Actions,
							private jobApplicationService: JobApplicationService,
							private router: Router) {
	}
}
