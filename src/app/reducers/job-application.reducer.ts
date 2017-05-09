import * as lodash from 'lodash';

import * as application from '../actions/job-application.action';
import { Application } from '../models/job-application.model';

export interface State {
	loaded: boolean;
	loading: boolean;
	application: Application;
}

const initialState: State = {
	loaded:      false,
	loading:     false,
	application: {} as Application,
};

export function addReference(payload: any): Application {
	const references = payload.references		|| [];

	const application = new Application (
		payload.fileUpload,
		payload.reasonForLeaving,
		payload.basePerMonth,
		payload.bonus,
		payload.starRate,
		payload.strength,
		payload.improvements,
		payload.achievements,
		payload.management,
		payload.references
	);
	return application;
}

export function reducer(state = initialState, action: application.Actions): State {
	switch (action.type) {
		case application.ActionType.LOAD_SUCCESS: {
			return Object.assign({}, state, {application: action.payload, loaded: true});
		}

		case application.ActionType.LOAD: {
			return Object.assign({}, state, {loaded: false});
		}

		case application.ActionType.REFERENCE_ADD:
		case application.ActionType.APPLICATION_SUBMIT: {
			return Object.assign({}, state, {loading: true});
		}
	}
}

export const getApplication = (state: State) => state.application;
export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
