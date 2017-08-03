import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionType = {
	APPLICATION_CONCEPT_LOAD:                         type('[APPLICATION] Application Concept Load'),
	APPLICATION_CONCEPT_ACCEPT:                       type('[APPLICATION] Application Concept Accept'),
	APPLICATION_FORM_LOAD:                            type('[APPLICATION] Application Form Load'),
	APPLICATION_FORM_LOAD_SUCCESS:                    type('[APPLICATION] Application Form Load Success'),
	APPLICATION_FORM_SUBMIT:                          type('[APPLICATION] Application Form Submit'),
	APPLICATION_FORM_SUBMIT_SUCCESS:                  type('[APPLICATION] Application Form Submit Success'),
	APPLICATION_FORM_SUBMIT_FAIL:                     type('[APPLICATION] Application Form Submit Fail'),
	APPLICATION_REFERENCE_FORM_LOAD:                  type('[REFERENCE] Application Reference Form Load'),
	APPLICATION_REFERENCE_FORM_LOAD_SUCCESS:          type('[REFERENCE] Application Reference Form Load Success'),
	APPLICATION_REFERENCE_FORM_SUBMIT:                type('[REFERENCE] Application Reference Form Submit'),
	APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS:        type('[REFERENCE] Application Reference Form Submit Success'),
	APPLICATION_REFERENCE_FORM_SUBMIT_FAIL:           type('[REFERENCE] Application Reference Form Submit Fail'),
	ADMIN_ALL_JOBS_APPLICATIONS_LOAD:                 type('[ADMIN] Admin All Jobs Applications Load'),
	ADMIN_ALL_JOBS_APPLICATIONS_LOAD_SUCCESS:         type('[ADMIN] Admin All Jobs Applications Load Success'),
	ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED:          type('[ADMIN] Admin Update Jobs Application Contacted'),
	ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED_SUCCESS:  type('[ADMIN] Admin Update Jobs Application Contacted Success'),
	ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED_FAIL:     type('[ADMIN] Admin Update Jobs Application Contacted Fail'),
	ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED:           type('[ADMIN] Admin Update Jobs Application Reviewed'),
	ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED_SUCCESS:   type('[ADMIN] Admin Update Jobs Application Reviewed Success'),
	ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED_FAIL:      type('[ADMIN] Admin Update Jobs Application Reviewed Fail'),
};

export class ApplicationConceptLoadAction implements Action {
	type = ActionType.APPLICATION_CONCEPT_LOAD;

	constructor(public payload: any) {}
}

export class ApplicationConceptAccept implements Action {
	type = ActionType.APPLICATION_CONCEPT_ACCEPT;

	constructor(public payload: any) {}
}

export class ApplicationFormLoadAction implements Action {
	type = ActionType.APPLICATION_FORM_LOAD;

	constructor(public payload: boolean) {}
}

export class ApplicationFormLoadSuccessAction implements Action {
	type = ActionType.APPLICATION_FORM_LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationFormSubmitAction implements Action {
	type = ActionType.APPLICATION_FORM_SUBMIT;

	constructor(public payload: any) {}
}


export class ApplicationFormSubmitSuccessAction implements Action {
	type = ActionType.APPLICATION_FORM_SUBMIT_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationFormSubmitFailAction implements Action {
	type = ActionType.APPLICATION_FORM_SUBMIT_FAIL;

	constructor(public payload: any) {}
}

export class ApplicationReferenceFormLoadAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_LOAD;

	constructor(public payload: boolean) {}
}

export class ApplicationReferenceFormLoadSuccessAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationReferenceFormLoadFailAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_FAIL;

	constructor(public payload: any) {}
}

export class ApplicationReferenceFormSubmitAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_SUBMIT;

	constructor(public payload: any) {}
}

export class ApplicationReferenceFormSubmitSuccessAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationReferenceFormSubmitFailAction implements Action {
	type = ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_FAIL;

	constructor(public payload: any) {}
}

export class AdminAllJobsApplicationsLoadAction implements Action {
	type = ActionType.ADMIN_ALL_JOBS_APPLICATIONS_LOAD;

	constructor(public payload: any) {}
}

export class AdminAllJobsApplicationLoadSuccessAction implements Action {
	type = ActionType.ADMIN_ALL_JOBS_APPLICATIONS_LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationContactedAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationContactedSuccessAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED_SUCCESS;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationContactedFailAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED_FAIL;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationReviewedAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationReviewedSuccessAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED_SUCCESS;

	constructor(public payload: any) {}
}

export class AdminUpdateJobsApplicationReviewedFailAction implements Action {
	type = ActionType.ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED_FAIL;

	constructor(public payload: any) {}
}

export type Actions = ApplicationConceptLoadAction
	| ApplicationConceptAccept
	| ApplicationFormLoadAction
	| ApplicationFormLoadSuccessAction
	| ApplicationFormSubmitAction
	| ApplicationFormSubmitSuccessAction
	| ApplicationFormSubmitFailAction
	| ApplicationReferenceFormLoadAction
	| ApplicationReferenceFormLoadSuccessAction
	| ApplicationReferenceFormLoadFailAction
	| ApplicationReferenceFormSubmitAction
	| ApplicationReferenceFormSubmitSuccessAction
	| ApplicationReferenceFormSubmitFailAction
	| AdminAllJobsApplicationsLoadAction
	| AdminAllJobsApplicationLoadSuccessAction
	| AdminUpdateJobsApplicationContactedAction
	| AdminUpdateJobsApplicationContactedSuccessAction
	| AdminUpdateJobsApplicationContactedFailAction
	| AdminUpdateJobsApplicationReviewedAction
	| AdminUpdateJobsApplicationReviewedSuccessAction
	| AdminUpdateJobsApplicationReviewedFailAction;
