import { combineReducers, ActionReducer } from '@ngrx/store';
import '@ngrx/core/add/operator/select';
import { createSelector } from 'reselect';

import * as fromLogin from './login.reducer';

export interface State {
	login: fromLogin.State;
}

const reducers = {
	login: fromLogin.reducer,
};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	return combinedReducer(state, action);
}

export const getLoginState = (state: State) => state.login;

export const isLoggedIn = createSelector(getLoginState, fromLogin.isLoggedIn);
export const getUser = createSelector(getLoginState, fromLogin.getUser);
export  const getUserEmail = createSelector(getLoginState, fromLogin.getUserEmail);
