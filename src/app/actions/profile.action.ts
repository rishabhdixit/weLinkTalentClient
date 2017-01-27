import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	PROFILE_LINKEDIN_SUCCESS: type('[PROFILE] Profile Linkedin Success'),
	PROFILE_LINKEDIN_FAIL:    type('[PROFILE] Profile Linkedin Fail'),
	PROFILE_LOGOUT:						type('[PROFILE] Profile clear')
};

export class ProfileLinkedinSuccessAction implements Action {
	type = ActionTypes.PROFILE_LINKEDIN_SUCCESS;

	constructor(public payload: any) {
	}
}

export class ProfileLinkedinFailAction implements Action {
	type = ActionTypes.PROFILE_LINKEDIN_FAIL;

	constructor(public payload: any) {
	}
}

export class ProfileLogOutAction implements Action {
	type = ActionTypes.PROFILE_LOGOUT;

	constructor(public payload: any) {
	}
}

export type Actions = ProfileLinkedinSuccessAction
	| ProfileLinkedinFailAction
	| ProfileLogOutAction;
