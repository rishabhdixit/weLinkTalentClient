import '@ngrx/core/add/operator/select';

import { JobApplication } from '../models/job-application.model';

import * as refereeFeedback from '../actions/referee-feedback.action';

export interface State {
	loaded: boolean;
	jobApplication: JobApplication;
};

const initialState: State = {
	loaded: false,
	jobApplication: {} as JobApplication,
};

export function reducer(state = initialState, action: refereeFeedback.Actions): State {
	switch (action.type) {
		case refereeFeedback.ActionTypes.LOAD_JOB_APPLICATION_SUCCESS: {
			return Object.assign({}, state, { jobApplication: action.payload });
		}
		default:
			return state;
	}
}

export const loaded = (state: State) => state.loaded;
export const getJobApplication = (state: State) => state.jobApplication;

