import { type } from '../util';
import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';

export const ActionTypes = {
	PROFILE_LOAD:             type('[PROFILE] Profile Load'),
	PROFILE_LOAD_SUCCESS:     type('[PROFILE] Profile Load Success'),
	PROFILE_LINKEDIN_SUCCESS: type('[PROFILE] Profile Linkedin Sign-in Success'),
	PROFILE_LINKEDIN_FAIL:    type('[PROFILE] Profile Linkedin Sign-in Fail'),
	PROFILE_LOGOUT:           type('[PROFILE] Profile clear')
};

export class ProfileLoadAction implements Action {
	type = ActionTypes.PROFILE_LOAD;

	constructor(public payload: any) {
	}
}

export class ProfileLoadSuccessAction implements Action {
	type = ActionTypes.PROFILE_LOAD_SUCCESS;

	constructor(public payload: any) {
	}
}

export class ProfileLinkedinSuccessAction implements Action {
	type = ActionTypes.PROFILE_LINKEDIN_SUCCESS;

	constructor(public payload: Profile) {
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
	| ProfileLogOutAction
	| ProfileLoadAction
	| ProfileLoadSuccessAction;
