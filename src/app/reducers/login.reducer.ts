import '@ngrx/core/add/operator/select';

import { User } from '../models/user.model';
import * as login from '../actions/login.action';

export interface State {
	loginFail: boolean;
	loaded: boolean;
	user: User;
	redirectUrl: string;
};

const initialState: State = {
	loginFail: false,
	loaded: false,
	user: null,
	redirectUrl: null,
};

export function reducer(state = initialState, action: login.Actions): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
		case login.ActionTypes.LOGOUT:
			return initialState;

		case login.ActionTypes.LOGIN_SUCCESS: {
			return Object.assign({}, state, {
				user: action.payload,
				loaded: true,
				loginFail: false
			});
		}

		case login.ActionTypes.LOGIN_FAIL:
			return Object.assign({}, state, {
				user: action.payload,
				loginFail: true
			});

		case login.ActionTypes.REGISTER_REDIRECT_URL:
			return Object.assign({}, state, { redirectUrl: action.payload });

		default:
			return state;
	}
}

export const isLoggedFail = (state: State) => state.loginFail;
export const getUser = (state: State) => state.user;
export const getUserEmail = (state: State) => state.user.email;
export const getUserId = (state: State) => state.user.id;
export const getLoaded = (state: State) => state.loaded;
export const getLogInRedirectUrl = (state: State) => state.redirectUrl;

