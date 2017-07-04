import '@ngrx/core/add/operator/select';
import * as _ from 'lodash';
import { User } from '../models/user.model';
import * as login from '../actions/login.action';
import * as jobs from '../actions/jobs.action';

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

		case jobs.ActionTypes.ADD_BOOKMARK_SUCCESS:
			return Object.assign({}, state, {
				user: Object.assign({}, state.user, {
					bookmark_ids: _.concat(state.user.bookmark_ids, action.payload.body.postId),
					email: state.user.email,
					id: state.user.id,
					profile: state.user.profile
				}),
				loginFail: false
			});

		case jobs.ActionTypes.REMOVE_BOOKMARK_SUCCESS:
			return Object.assign({}, state, {
				user: Object.assign({}, state.user, {
					bookmark_ids: _.filter(state.user.bookmark_ids, (id) => id !== action.payload.postId),
					email: state.user.email,
					id: state.user.id,
					profile: state.user.profile
				}),
				loginFail: false
			});


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

