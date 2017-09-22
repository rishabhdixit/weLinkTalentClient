import { User } from '../models/user.model';
import * as userAction from '../actions/user.action';

export interface State {
	loaded: boolean;
	user: User;
};

const initialState: State = {
	loaded: false,
	user: null
};

export function reducer(state = initialState, action: userAction.Actions): State {
	switch (action.type) {
		case userAction.ActionTypes.LOAD: {
			return Object.assign({}, state, { loaded: false });
		}
		case userAction.ActionTypes.LOAD_SUCCESS: {
			return Object.assign({}, state, {
				user: action.payload,
				loaded: true,
			});
		}

		default:
			return state;
	}
}

export const getUserById = (state: State) => state.user;
