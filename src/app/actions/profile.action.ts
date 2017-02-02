import { type } from '../util';
import { Action } from '@ngrx/store';
import { Profile } from '../models/profile.model';

export const ActionTypes = {
	LOAD:                    type('[PROFILE] Profile Load'),
	LOAD_SUCCESS:            type('[PROFILE] Profile Load Success'),
	UPDATE:                  type('[PROFILE] Profile Update'),
	UPDATE_SUCCESS:          type('[PROFILE] Profile Update Success'),
	UPDATE_FAIL:             type('[PROFILE] Profile Update Fail'),
	LINKEDIN:                type('[PROFILE] Profile Linkedin Sign-in'),
	LINKEDIN_SUCCESS:        type('[PROFILE] Profile Linkedin Sign-in Success'),
	LINKEDIN_FAIL:           type('[PROFILE] Profile Linkedin Sign-in Fail'),
	LOGOUT:                  type('[PROFILE] Profile Clear'),
	POSITION_CREATE:         type('[PROFILE] Profile Position Create'),
	POSITION_CREATE_SUCCESS: type('[PROFILE] Profile Position Create Success'),
	POSITION_UPDATE:         type('[PROFILE] Profile Position Update'),
	POSITION_UPDATE_SUCCESS: type('[PROFILE] Profile Position Update Success'),
};

export class ProfileLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {
	}
}

export class ProfileLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {
	}
}

export class ProfileLinkedinAction implements Action {
	type = ActionTypes.LINKEDIN;

	constructor(public payload: Profile) {
	}
}

export class ProfileLinkedinSuccessAction implements Action {
	type = ActionTypes.LINKEDIN_SUCCESS;

	constructor(public payload: Profile) {
	}
}

export class ProfileLinkedinFailAction implements Action {
	type = ActionTypes.LINKEDIN_FAIL;

	constructor(public payload: any) {
	}
}

export class ProfileLogOutAction implements Action {
	type = ActionTypes.LOGOUT;

	constructor(public payload: any) {
	}
}

export class ProfileUpdateAction implements Action {
	type = ActionTypes.UPDATE;

	constructor(public payload: any) {
	}
}

export class ProfileUpdateSuccessAction implements Action {
	type = ActionTypes.UPDATE_SUCCESS;

	constructor(public payload: any) {
	}
}

export class PositionCreateAction implements Action {
	type = ActionTypes.POSITION_CREATE;

	constructor(public payload: any) {
	}
}

export class PositionCreateSuccessAction implements Action {
	type = ActionTypes.POSITION_CREATE_SUCCESS;

	constructor(public payload: any) {
	}
}

export class PositionUpdateAction implements Action {
	type = ActionTypes.POSITION_UPDATE;

	constructor(public payload: any) {
	}
}

export class PositionUpdateSuccessAction implements Action {
	type = ActionTypes.POSITION_UPDATE_SUCCESS;

	constructor(public payload: any) {
	}
}

export type Actions = ProfileLinkedinAction
	| ProfileLinkedinSuccessAction
	| ProfileLinkedinFailAction
	| ProfileLogOutAction
	| ProfileLoadAction
	| ProfileLoadSuccessAction
	| ProfileUpdateAction
	| ProfileUpdateSuccessAction
	| PositionCreateAction
	| PositionCreateSuccessAction
	| PositionUpdateAction
	| PositionUpdateSuccessAction;
