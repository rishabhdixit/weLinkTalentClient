import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD:                       type('[USER] User By Id Load'),
	LOAD_SUCCESS:               type('[USER] User By Id Load Success'),
	LOAD_FAIL:                  type('[USER] User By Id Load Fail')
};

export class UserLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {}
}
export class UserLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {}
}
export class UserLoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) {}
}

export type Actions = UserLoadAction
	| UserLoadSuccessAction
	| UserLoadFailAction;
