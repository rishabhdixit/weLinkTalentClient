import { combineReducers, ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { createSelector } from 'reselect';

import * as fromLogin from './login.reducer';
import * as fromProfile from './profile.reducer';

export interface State {
	login:   fromLogin.State;
	profile: fromProfile.State;
}

const reducers = {
	login:   fromLogin.reducer,
	profile: fromProfile.reducer
};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	return combinedReducer(state, action);
}

export const getLoginState = (state: State) => state.login;
export const getProfileState = (state: State) => state.profile;

export const isLoggedFail = createSelector(getLoginState, fromLogin.isLoggedFail);
export const getUser = createSelector(getLoginState, fromLogin.getUser);
export const getUserEmail = createSelector(getLoginState, fromLogin.getUserEmail);

export const getUserProfile = createSelector(getProfileState, fromProfile.getProfile);
