import { type } from '../util';
import { Action } from '@ngrx/store';
import { Application } from '../models/job-application.model';
import { Job } from 'app/models/job.model';

export const ActionType = {
	APPLICATION_CONCEPT_LOAD : type('[APPLICATION] Application Concept Load'),
	APPLICATION_CONCEPT_ACCEPT : type('[APPLICATION] Application Concept Accept'),
	APPLICATON_FORM_LOAD:                           type('[APPLICATION] Application Form Load'),
	// APPLICATION_LOAD_SUCCESS:                   type('[APPLICATION] Application Load Success'),
	// REFERENCE_ADD:                  type('[APPLICATION] Application Reference Add'),
	// REFERENCE_ADD_SUCCESS:          type('[APPLICATION] Application Reference Add Success'),
	// REFERENCE_REMOVE:				type('[APPLICATION] Application Reference Remove'),
	// REFERENCE_REMOVE_SUCCESS:		type('[APPLICATION] Application Reference Remove Success'),
	// APPLICATION_SUBMIT:             type('[APPLICATION] Application Submit'),
	// APPLICATION_SUBMIT_SUCCESS:     type('[APPLICATION] Application Submit Success'),
};


export class ApplicationConceptLoadAction implements Action {
	type = ActionType.APPLICATION_CONCEPT_LOAD;

	constructor(public payload: Job) {}
}

export class ApplicationConceptAccept implements Action {
	type = ActionType.APPLICATION_CONCEPT_ACCEPT;

	constructor(public payload: any) {}
}

export class ApplicationFormLoadAction implements Action {
	type = ActionType.APPLICATON_FORM_LOAD;

	constructor(public payload: boolean) {}
}

// export class ApplicationLoadSuccessAction implements Action {
// 	type = ActionType.LOAD_SUCCESS;

// 	constructor(public payload: any) {}
// }

// export class ApplicationReferenceAddAction implements Action {
// 	type = ActionType.REFERENCE_ADD;

// 	constructor(public payload: any) {}
// }

// export class ApplicationReferenceAddSuccessAction implements Action {
// 	type = ActionType.REFERENCE_ADD_SUCCESS;

// 	constructor(public payload: any) {}
// }

// export class ApplicationReferenceRemoveAction implements Action {
// 	type = ActionType.REFERENCE_REMOVE;

// 	constructor(public payload: any) {}
// }

// export class ApplicationReferenceRemoveSuccessAction implements Action {
// 	type = ActionType.REFERENCE_REMOVE_SUCCESS;

// 	constructor(public payload: any) {}
// }

// export class ApplicationSubmitAction implements Action {
// 	type = ActionType.APPLICATION_SUBMIT;

// 	constructor(public payload: any) {}
// }

// export class ApplicationSubmitSuccessAction implements Action {
// 	type = ActionType.APPLICATION_SUBMIT_SUCCESS;

// 	constructor(public payload: any) {}
// }

export type Actions = ApplicationConceptLoadAction
		| ApplicationConceptAccept
		| ApplicationFormLoadAction;


// ApplicationLoadAction
// 	| ApplicationLoadSuccessAction
// 	| ApplicationReferenceAddAction
// 	| ApplicationReferenceAddSuccessAction
// 	| ApplicationReferenceRemoveAction
// 	| ApplicationReferenceRemoveSuccessAction
// 	| ApplicationSubmitAction
// 	| ApplicationSubmitSuccessAction;
