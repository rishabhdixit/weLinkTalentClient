import { environment } from '../../environments/environment';
import { combineReducers, ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromLogin from './login.reducer';
import * as fromProfile from './profile.reducer';

export interface State {
	login:   fromLogin.State;
	profile: fromProfile.State;
}

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
const reducers = {
	login:   fromLogin.reducer,
	profile: fromProfile.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}

export const getLoginState = (state: State) => state.login;
export const getProfileState = (state: State) => state.profile;

export const isLoggedFail = createSelector(getLoginState, fromLogin.isLoggedFail);
export const getUser = createSelector(getLoginState, fromLogin.getUser);
export const getUserEmail = createSelector(getLoginState, fromLogin.getUserEmail);

export const getUserProfile = createSelector(getProfileState, fromProfile.getProfile);
