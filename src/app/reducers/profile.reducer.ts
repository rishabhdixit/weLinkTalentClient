import * as lodash from 'lodash';

import * as profile from '../actions/profile.action';
import * as login from '../actions/login.action';

import { Profile } from '../models/profile.model';

export interface State {
	loaded: boolean;
	loading: boolean;
	profile: Profile;
};

const initialState: State = {
	loaded: false,
	loading: false,
	profile: {} as Profile
};

// Transform profile data from linkedin into
// profile object compatible with db record
export function createProfile(payload: any): Profile {
	const positions = payload.positions.values || [];
	const skills = payload.positions.skills || [];

	const profile = new Profile();
	profile.linkedinId = payload.id;
	profile.emailAddress = payload.emailAddress;
	profile.firstName = payload.firstName;
	profile.lastName = payload.lastName;
	profile.pictureUrl = payload.pictureUrl;
	profile.summary = payload.summary;
	profile.positions = positions.map((position) => position);
	profile.skills = skills.map((skill) => skill);
	return profile;
};

export function reducer(state = initialState, action: profile.Actions): State {
	switch (action.type) {
		case profile.ActionTypes.LINKEDIN_SUCCESS: {
			return Object.assign({}, state, { profile: action.payload, loaded: true });
		}

		case profile.ActionTypes.LOAD_SUCCESS: {
			return Object.assign({}, state, { profile: action.payload, loaded: true });
		}

		case profile.ActionTypes.LOAD: {
			return Object.assign({}, state, { loaded: false });
		}

		case profile.ActionTypes.UPDATE: {
			return Object.assign({}, state, { loading: true });
		}

		case profile.ActionTypes.UPDATE_SUCCESS: {
			const profile = action.payload;

			return lodash.merge({}, state, { profile, loading: false });
		}
		case login.ActionTypes.LOGOUT: {
			return lodash.merge({}, state, { 'profile': null, 'loaded': false, 'loading': false });
		}
		default: {
			return state;
		}
	}
}

export const getProfile = (state: State) => state.profile;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
