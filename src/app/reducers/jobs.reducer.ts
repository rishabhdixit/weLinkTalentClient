import { Job } from '../models/job.model';
import * as jobs from '../actions/jobs.action';

export interface State {
	jobs: Job[];
}

const initialState: State = {
	jobs: []
};

export function reducer(state = initialState, action: jobs.Actions): State {
	switch (action.type) {
		case jobs.ActionTypes.JOBS_LOAD:
			return state;
		case jobs.ActionTypes.JOBS_LOAD_SUCCESS:
			return {
				'jobs': [...state.jobs, ...action.payload]
			};
		case jobs.ActionTypes.JOBS_SEARCH:
			return {
				'jobs': [...state.jobs, ...action.payload]
			};
		default:
			return state;
	}
}

export const getJobs = (state: State) => state.jobs;
