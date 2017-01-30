import * as profile from '../actions/profile.action';
import { Profile } from '../models/profile.model';

export interface State {
	profile: Profile;
};

const initialState: State = {
	profile: {} as Profile
};

export function createProfile(payload: any): Profile {
	const profile = <Profile>{};

	profile.id           = payload.id;
	profile.emailAddress = payload.emailAddress;
	profile.firstName    = payload.firstName;
	profile.lastName     = payload.lastName;
	profile.pictureUrl   = payload.pictureUrl;
	profile.headline     = payload.headline;
	profile.positions    = payload.positions.values.map((position) => position);

	return profile;
};

export function reducer(state = initialState, action: profile.Actions): State {
	switch (action.type) {
		case profile.ActionTypes.PROFILE_LINKEDIN_SUCCESS:
			return Object.assign({}, state, { profile: createProfile(action.payload) });
		case profile.ActionTypes.PROFILE_LOGOUT:
			return initialState;
		default:
			return state;
	}
}

export const getProfile = (state: State) => state.profile;
