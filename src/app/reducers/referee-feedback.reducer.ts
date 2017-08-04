import '@ngrx/core/add/operator/select';

import { JobApplication } from '../models/job-application.model';
import { Job } from '../models/job.model';
import { RefereeFeedbackResponse } from '../models/referee-feedback-response.model';

import * as refereeFeedback from '../actions/referee-feedback.action';

export interface State {
	loaded: boolean;
	jobApplication: JobApplication;
	job: Job;
	refereeFeedbackResponse: RefereeFeedbackResponse;
};

const initialState: State = {
	loaded: false,
	jobApplication: {} as JobApplication,
	job: {} as Job,
	refereeFeedbackResponse: {} as RefereeFeedbackResponse
};

export function reducer(state = initialState, action: refereeFeedback.Actions): State {
	switch (action.type) {
		case refereeFeedback.ActionTypes.LOAD_JOB_APPLICATION_SUCCESS: {
			return Object.assign({}, state, { jobApplication: action.payload });
		}
		case refereeFeedback.ActionTypes.LOAD_JOB_SUCCESS: {
			return Object.assign({}, state, { job: action.payload });
		}
		case refereeFeedback.ActionTypes.SUBMIT_FEEDBACK_SUCCESS: {
			return Object.assign({}, state, { refereeFeedbackResponse: action.payload });
		}
		default:
			return state;
	}
}

export const loaded = (state: State) => state.loaded;
export const getJobApplication = (state: State) => state.jobApplication;
export const getJob = (state: State) => state.job;
export const getRefereeFeedbackResponse = (state: State) => state.refereeFeedbackResponse;
