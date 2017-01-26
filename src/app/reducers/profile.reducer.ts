import * as profile from '../actions/profile.action';

import { Profile, Position } from '../models/profile.model';

export interface State {
	profile: Profile;
};

const initialState: State = {
	profile: {} as Profile
};

export function reducer(state = initialState, action: profile.Actions): State {
	switch (action.type) {
		case profile.ActionTypes.PROFILE_LINKEDIN_SUCCESS:
			const payload = {
				id:         action.payload.id,
				email:      action.payload.emailAddress,
				firstName:  action.payload.firstName,
				lastName:   action.payload.lastName,
				pictureUrl: action.payload.pictureUrl,
				headline:   action.payload.headline,
				positions:  action.payload.positions.values.map((position) => position)
			};

			return Object.assign({}, state, { profile: payload });

		default:
			return state;
	}
}

export const getProfile = (state: State) => state.profile;
