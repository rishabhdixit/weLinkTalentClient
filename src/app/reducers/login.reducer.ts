import '@ngrx/core/add/operator/select';

import { User } from '../models/user.model';
import * as login from '../actions/login.action';

export interface State {
	loginFail: boolean;
	user: User;
};

const initialState: State = {
	loginFail: false,
	user: {} as User
};

export function reducer(state = initialState, action: login.Actions): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
			return {
				user: null,
				loginFail: false
			};

		case login.ActionTypes.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.payload,
				loginFail: false
			});

		case login.ActionTypes.LOGIN_FAIL:
			return Object.assign({}, state, {
				user: action.payload,
				loginFail: true
			});

		default :
			return state;
	}
}

export const isLoggedFail = (state: State) => state.loginFail;
export const getUser = (state: State) => state.user;
export const getUserEmail = (state: State) => state.user.email;


