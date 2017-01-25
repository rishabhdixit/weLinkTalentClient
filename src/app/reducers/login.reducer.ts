import '@ngrx/core/add/operator/select';

import { LogIn } from '../models/login.model';
import { User } from '../models/user.model';
import * as login from '../actions/login.action';

export interface State {
	login: LogIn;
	loginSuccess: boolean;
	user: User;
}
;

const initialState: State = {
	login: null,
	loginSuccess: false,
	user: null
};

export function reducer(state = initialState, action: login.Actions): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
			return {login: action.payload.login, user: null, loginSuccess: false};

		case login.ActionTypes.LOGIN_SUCCESS:
			return {login: action.payload.login, user: action.payload.user, loginSuccess: true};

		case login.ActionTypes.LOGIN_FAIL:
			return {login: null, user: null, loginSuccess: false};

		default :
			return state;
	}
}

export const isLoggedIn = (state: State) => state.loginSuccess;
export const getUser = (state: State) => state.user;


