import { Job } from '../models/job.model';
import { PageMetaData } from '../models/page-metadata.model';
import { createSelector } from 'reselect';
import * as jobs from '../actions/jobs.action';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: { [id: string]: Job };
	ids: string[];
	selectedJobId: string;
	pageMetaData: PageMetaData;
	isBookmarked: boolean;
}

const initialState: State = {
	loaded: false,
	loading: false,
	ids: [],
	entities: {},
	selectedJobId: null,
	pageMetaData: { size: 0, pageNumber: 0, totalPages: 0, totalSize: 0 },
	isBookmarked: false,
};

export function reducer(state = initialState, action: jobs.Actions): State {
	switch (action.type) {
		case jobs.ActionTypes.LOAD: {
			return Object.assign({}, state, {
				loading: true,
				selectedJobId: null,
			});
		}
		case jobs.ActionTypes.LOAD_SUCCESS: {
			const jobs = action.payload;
			const newJobIds = jobs.jobsList.map(job => job._id);

			const newJobEntities = jobs.jobsList.reduce((entities: { [id: string]: Job }, job: Job) => {
				return Object.assign(entities, {
					[job._id]: job
				});
			}, {});

			return {
				loaded: true,
				loading: false,
				ids: [...newJobIds],
				entities: Object.assign({}, {}, newJobEntities),
				selectedJobId: state.selectedJobId,
				pageMetaData: jobs.pageMetaData,
				isBookmarked: false,
			};
		}
		case jobs.ActionTypes.SELECT: {
			return Object.assign({}, state, {
				selectedJobId: action.payload,
			});
		}
		case jobs.ActionTypes.LOAD_DETAIL: {
			const job = action.payload;
			if (state.ids.indexOf(job.id) > -1) {
				return state;
			}

			return {
				loaded: state.loaded,
				loading: state.loading,
				ids: [...state.ids, job.id],
				entities: Object.assign({}, state.entities, {
					[job.id]: job
				}),
				selectedJobId: state.selectedJobId,
				pageMetaData: state.pageMetaData,
				isBookmarked: false,
			};
		}
		case jobs.ActionTypes.ADD_BOOKMARK: {
			return state;
		}
		case jobs.ActionTypes.ADD_BOOKMARK_SUCCESS: {
			return Object.assign({}, state, {
				isBookmarked: true
			});
		}
		case jobs.ActionTypes.ADD_BOOKMARK_FAIL: {
			return Object.assign({}, state, {
				isBookmarked: false
			});
		}
		case jobs.ActionTypes.REMOVE_BOOKMARK: {
			return state;
		}
		case jobs.ActionTypes.REMOVE_BOOKMARK_SUCCESS: {
			return Object.assign({}, state, {
				isBookmarked: false
			});
		}
		case jobs.ActionTypes.REMOVE_BOOKMARK_FAIL: {
			return Object.assign({}, state, {
				isBookmarked: true
			});
		}
		case jobs.ActionTypes.GET_STATUS: {
			return Object.assign({}, state, { loaded: false });
		}
		case jobs.ActionTypes.GET_STATUS_SUCCESS: {
			const payload = action.payload;
			const selectedJob = state.entities[payload.selectedJobId];
			let newSelectedJob: Job = {} as Job;
			Object.assign(newSelectedJob, selectedJob, { 'status': (payload.data.status ? payload.data.status : payload.data.error) });
			return Object.assign({}, state, {
				entities: Object.assign({}, state.entities, {
					[payload.selectedJobId]: newSelectedJob
				}),
				loaded: true
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

export const getTotalJobsSearch = (state: State) => state.pageMetaData.totalSize;

//noinspection TypeScriptValidateTypes
export const getSelectedJob = createSelector(getEntities, getSelectedJobId, (entities, selectedId) => {
	return entities[selectedId];
});

//noinspection TypeScriptValidateTypes
export const getAllJobs = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});
