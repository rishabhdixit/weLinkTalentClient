import * as lodash from 'lodash';

import * as profile from '../actions/profile.action';
import { Profile } from '../models/profile.model';

export interface State {
	loaded:  boolean;
	loading: boolean;
	profile: Profile;
};

const initialState: State = {
	loaded:  false,
	loading: false,
	profile: {} as Profile
};

// Transform profile data from linkedin into
// profile object compatible with db record
export function createProfile(payload: any): Profile {
	const positions = payload.positions.values		|| [];
	const skills    = payload.positions.skills		|| [];

	const profile = new Profile();
	profile.linkedinId = payload.id;
	profile.emailAddress = payload.emailAddress;
	profile.firstName = payload.firstName;
	profile.lastName = payload.lastName;
	profile.pictureUrl = payload.pictureUrl;
	profile.summary = payload.summary;
	profile.positions =	positions.map((position) => position);
	profile.skills = 	skills.map((skill) => skill);
	return profile;
};

export function reducer(state = initialState, action: profile.Actions): State {
	switch (action.type) {
		case profile.ActionTypes.LINKEDIN_SUCCESS: {
			return Object.assign({}, state, {profile: action.payload, loaded: true});
		}

		case profile.ActionTypes.LOAD_SUCCESS: {
			return Object.assign({}, state, {profile: action.payload, loaded: true});
		}

		case profile.ActionTypes.LOAD: {
			return Object.assign({}, state, {loaded: false});
		}

		case profile.ActionTypes.UPDATE:
		case profile.ActionTypes.POSITION_CREATE:
		case profile.ActionTypes.POSITION_UPDATE: {
			return Object.assign({}, state, {loading: true});
		}

		case profile.ActionTypes.UPDATE_SUCCESS: {
			const profile = action.payload;

			return lodash.merge({}, state, {profile, loading: false});
		}

		// reducer for saving profile info
		case profile.ActionTypes.PROFILE_SAVE_INFO_SUCCESS: {
			return Object.assign({}, state, {profile: action.payload});
		}

		case profile.ActionTypes.POSITION_CREATE_SUCCESS: {
			const positions = state.profile.positions.concat(action.payload);
			const profile = Object.assign({}, state.profile, { positions });

			return Object.assign({}, state, { profile, loading: false });
		}

		case profile.ActionTypes.POSITION_UPDATE_SUCCESS: {
			const payload = action.payload;
			const positions = state.profile.positions.map((position) => {
				if (position.id === payload.id) {
					return Object.assign({}, position, payload);
				}
				return position;
			});

			const profile = Object.assign({}, state.profile, { positions });

			return Object.assign({}, state, { profile, loading: false });
		}

		case profile.ActionTypes.POSITION_REMOVE_SUCCESS: {
			const payload = action.payload;

			return Object.assign({}, state, {
				positions: state.profile.positions.splice(payload, 1)
			});
		}

		default: {
			return state;
		}
	}
}

export const getProfile = (state: State) => state.profile;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
