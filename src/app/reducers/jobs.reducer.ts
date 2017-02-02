import { Job } from '../models/job.model';
import { createSelector } from 'reselect';
import * as jobs from '../actions/jobs.action';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: {[id: string]: Job};
	ids: string[];
	selectedJobId: string;
}

const initialState: State = {
	loaded: false,
	loading: false,
	ids: [],
	entities: {},
	selectedJobId: null
};

export function reducer(state = initialState, action: jobs.Actions): State {
	switch (action.type) {
		case jobs.ActionTypes.JOBS_LOAD: {
			return Object.assign({}, state, {
				loading: true,
				selectedJobId: null
			});
		}
		case jobs.ActionTypes.JOBS_LOAD_SUCCESS: {
			const jobs = action.payload;
			const newJobs = jobs.filter(job => !state.entities[job.id]);

			const newJobIds = newJobs.map(job => job.id);
			const newJobEntities = newJobs.reduce((entities: {[id: string]: Job}, job: Job) => {
				return Object.assign(entities, {
					[job.id]: job
				});
			}, {});
			return {
				loaded: true,
				loading: false,
				ids: [...state.ids, ...newJobIds],
				entities: Object.assign({}, state.entities, newJobEntities),
				selectedJobId: state.selectedJobId
			};
		}
		case jobs.ActionTypes.JOBS_SELECT: {
			return Object.assign({}, state, {
				selectedJobId: action.payload
			});
		}
		default: {
			return state;
		}
	}
}

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getSelectedJobId = (state: State) => state.selectedJobId;

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

//noinspection TypeScriptValidateTypes
export const getSelectedJob = createSelector(getEntities, getSelectedJobId, (entities, selectedId) => {
	return entities[selectedId];
});

//noinspection TypeScriptValidateTypes
export const getAllJobs = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});
