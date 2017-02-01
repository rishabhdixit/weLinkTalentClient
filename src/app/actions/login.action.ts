import { type } from '../util';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Login } from '../models/login.model';

export const ActionTypes = {
	LOGIN:         type('[LOGIN] Login'),
	LOGIN_SUCCESS: type('[LOGIN] Login Success'),
	LOGIN_FAIL:    type('[LOGIN] Login Fail')
};

export class LoginAction implements Action {
	type = ActionTypes.LOGIN;

	constructor(public payload: Login) {
	}
}

export class LoginSuccessAction implements Action {
	type = ActionTypes.LOGIN_SUCCESS;

	constructor(public payload: any) {
	}
}

export class LoginFailAction implements Action {
	type = ActionTypes.LOGIN_FAIL;

	constructor(public payload: any) {
	}
}

export type Actions = LoginAction
	| LoginSuccessAction
	| LoginFailAction;
