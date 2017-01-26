import '@ngrx/core/add/operator/select';

import { User } from '../models/user.model';
import * as login from '../actions/login.action';

export interface State {
	loginSuccess: boolean;
	user: User;
};

const initialState: State = {
	loginSuccess: false,
	user: {} as User
};

export function reducer(state = initialState, action: login.Actions): State {
	switch (action.type) {
		case login.ActionTypes.LOGIN:
			return {
				user: null,
				loginSuccess: false
			};

		case login.ActionTypes.LOGIN_SUCCESS:
			return Object.assign({}, state, {
				user: action.payload,
				loginSuccess: true
			});

		case login.ActionTypes.LOGIN_FAIL:
			return {
				user: null,
				loginSuccess: false
			};

		default :
			return state;
	}
}

export const isLoggedIn = (state: State) => state.loginSuccess;
export const getUser = (state: State) => state.user;
export const getUserEmail = (state: State) => state.user.email;


