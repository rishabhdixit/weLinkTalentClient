import { type } from '../util';
import { Action } from '@ngrx/store';
import { Application } from '../models/job-application.model';

export const ActionType = {
	LOAD:                           type('[APPLICATION] Application Load'),
	LOAD_SUCCESS:                   type('[APPLICATION] Application Load Success'),
	REFERENCE_ADD:                  type('[APPLICATION] Application Reference Add'),
	REFERENCE_ADD_SUCCESS:          type('[APPLICATION] Application Reference Add Success'),
	REFERENCE_REMOVE:				type('[APPLICATION] Application Reference Remove'),
	REFERENCE_REMOVE_SUCCESS:		type('[APPLICATION] Application Reference Remove Success'),
	APPLICATION_SUBMIT:             type('[APPLICATION] Application Submit'),
	APPLICATION_SUBMIT_SUCCESS:     type('[APPLICATION] Application Submit Success'),
};

export class ApplicationLoadAction implements Action {
	type = ActionType.LOAD;

	constructor(public payload: any) {}
}

export class ApplicationLoadSuccessAction implements Action {
	type = ActionType.LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationReferenceAddAction implements Action {
	type = ActionType.REFERENCE_ADD;

	constructor(public payload: any) {}
}

export class ApplicationReferenceAddSuccessAction implements Action {
	type = ActionType.REFERENCE_ADD_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationReferenceRemoveAction implements Action {
	type = ActionType.REFERENCE_REMOVE;

	constructor(public payload: any) {}
}

export class ApplicationReferenceRemoveSuccessAction implements Action {
	type = ActionType.REFERENCE_REMOVE_SUCCESS;

	constructor(public payload: any) {}
}

export class ApplicationSubmitAction implements Action {
	type = ActionType.APPLICATION_SUBMIT;

	constructor(public payload: any) {}
}

export class ApplicationSubmitSuccessAction implements Action {
	type = ActionType.APPLICATION_SUBMIT_SUCCESS;

	constructor(public payload: any) {}
}

export type Actions = ApplicationLoadAction
	| ApplicationLoadSuccessAction
	| ApplicationReferenceAddAction
	| ApplicationReferenceAddSuccessAction
	| ApplicationReferenceRemoveAction
	| ApplicationReferenceRemoveSuccessAction
	| ApplicationSubmitAction
	| ApplicationSubmitSuccessAction;
