import { type } from '../util';
import { Action } from '@ngrx/store';
import { Login } from '../models/login.model';

export const ActionTypes = {
	LOGIN:                      type('[USER] Login'),
	LOGOUT:                     type('[USER] Logout'),
	LOGIN_SUCCESS:              type('[USER] Login Success'),
	LOGIN_FAIL:                 type('[USER] Login Fail'),
	REGISTER_REDIRECT_URL:      type('[USER] Register redirect url'),
	LOGIN_FILL_USER:            type('[USER] Login Fill User')
};

export class LoginAction implements Action {
	type = ActionTypes.LOGIN;

	constructor(public payload: Login) {
	}
}

export class LogoutAction implements Action {
	type = ActionTypes.LOGOUT;

	constructor(public payload: any) {
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

export class RegisterRedirectUrlAction implements Action {
	type = ActionTypes.REGISTER_REDIRECT_URL;

	constructor(public payload: any) {
	}
}

export class LoginFillUserAction implements Action {
	type = ActionTypes.LOGIN_FILL_USER;

	constructor(public payload: any) {
	}
}

export type Actions = LoginAction
	| LogoutAction
	| LoginSuccessAction
	| LoginFailAction
	| RegisterRedirectUrlAction
	| LoginFillUserAction;
