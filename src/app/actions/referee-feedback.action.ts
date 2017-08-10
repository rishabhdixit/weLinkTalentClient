import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD_JOB_APPLICATION:             type('[REFEREE FEEDBACK] Load Job Application'),
	LOAD_JOB_APPLICATION_SUCCESS:     type('[REFEREE FEEDBACK] Load Job Application Success'),
	LOAD_JOB_APPLICATION_FAIL:        type('[REFEREE FEEDBACK] Load Job Application Fail'),
	LOAD_JOB:                         type('[REFEREE FEEDBACK] Load Job'),
	LOAD_JOB_SUCCESS:                 type('[REFEREE FEEDBACK] Load Job Success'),
	LOAD_JOB_FAIL:                    type('[REFEREE FEEDBACK] Load Job Fail'),
	SUBMIT_FEEDBACK:                  type('[REFEREE FEEDBACK] Submit Referee Feedback'),
	SUBMIT_FEEDBACK_SUCCESS:          type('[REFEREE FEEDBACK] Submit Referee Feedback Success'),
	DECRYPT_TOKEN:                    type('[REFEREE FEEDBACK] Decrypt token'),
	DECRYPT_TOKEN_SUCCESS:            type('[REFEREE FEEDBACK] Decrypt token Success'),
	SAVE_ENCRYPTED_TOKEN_SUCCESS:     type('[REFEREE FEEDBACK] Save Encrypted token Success')
};

export class LoadJobApplicationAction implements Action {
	type = ActionTypes.LOAD_JOB_APPLICATION;

	constructor(public payload: any) {
	}
}

export class LoadJobApplicationSuccessAction implements Action {
	type = ActionTypes.LOAD_JOB_APPLICATION_SUCCESS;

	constructor(public payload: any) {
	}
}

export class LoadJobApplicationFailAction implements Action {
	type = ActionTypes.LOAD_JOB_APPLICATION_FAIL;

	constructor(public payload: any) {
	}
}

export class LoadJobAction implements Action {
	type = ActionTypes.LOAD_JOB;

	constructor(public payload: any) {
	}
}

export class LoadJobSuccessAction implements Action {
	type = ActionTypes.LOAD_JOB_SUCCESS;

	constructor(public payload: any) {
	}
}

export class LoadJobFailAction implements Action {
	type = ActionTypes.LOAD_JOB_FAIL;

	constructor(public payload: any) {
	}
}

export class SubmitFeedbackAction implements Action {
	type = ActionTypes.SUBMIT_FEEDBACK;

	constructor(public payload: any) {
	}
}

export class SubmitFeedbackSuccessAction implements Action {
	type = ActionTypes.SUBMIT_FEEDBACK_SUCCESS;

	constructor(public payload: any) {
	}
}

export class DecryptTokenAction implements Action {
	type = ActionTypes.DECRYPT_TOKEN;

	constructor(public payload: any) {
	}
}

export class DecryptTokenSuccessAction implements Action {
	type = ActionTypes.DECRYPT_TOKEN_SUCCESS;

	constructor(public payload: any) {
	}
}

export class SaveEncryptedTokenSuccess implements Action {
	type = ActionTypes.SAVE_ENCRYPTED_TOKEN_SUCCESS;

	constructor(public payload: any) {
	}
}

export type Actions = LoadJobApplicationAction
	| LoadJobApplicationSuccessAction
	| LoadJobApplicationFailAction
	| LoadJobAction
	| LoadJobSuccessAction
	| LoadJobFailAction
	| SubmitFeedbackAction
	| SubmitFeedbackSuccessAction
	| DecryptTokenAction
	| DecryptTokenSuccessAction
	| SaveEncryptedTokenSuccess;
