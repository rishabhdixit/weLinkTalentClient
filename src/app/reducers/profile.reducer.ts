import * as profile from '../actions/profile.action';
import { Profile } from '../models/profile.model';

export interface State {
	loaded:  boolean;
	profile: Profile;
};

const initialState: State = {
	loaded:  false,
	profile: {} as Profile
};

export function createProfile(payload: any): Profile {
	const profile = new Profile(
		payload.id,
		payload.emailAddress,
		payload.firstName,
		payload.lastName,
		payload.pictureUrl,
		payload.headline,
		payload.positions.values.map((position) => position),
	);

	return profile;
};

export function reducer(state = initialState, action: profile.Actions): State {
	switch (action.type) {
		case profile.ActionTypes.PROFILE_LINKEDIN_SUCCESS: {
			return Object.assign({}, state,
				{
					profile: createProfile(action.payload),
					loaded:  true,
				});
		}

		case profile.ActionTypes.PROFILE_LOAD_SUCCESS: {
			return Object.assign({}, state, { profile: action.payload, loaded: true });
		}

		case profile.ActionTypes.PROFILE_LOAD:
		case profile.ActionTypes.PROFILE_LOGOUT: {
			return Object.assign({}, state, { loaded: false });
		}

		default: {
			return state;
		}
	}
}

export const getProfile = (state: State) => state.profile;
export const getLoaded = (state: State) => state.loaded;
