import { Job } from '../models/job.model';
import { PageMetaData } from '../models/page-metadata.model';
import { createSelector } from 'reselect';
import * as bookmarkedJobsAction from '../actions/bookmarked-jobs.action';

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

export function reducer(state = initialState, action: bookmarkedJobsAction.Actions): State {
	switch (action.type) {
		case bookmarkedJobsAction.ActionTypes.LOAD: {
			return Object.assign({}, state, {
				loading: true,
				selectedJobId: null,
			});
		}
		case bookmarkedJobsAction.ActionTypes.LOAD_SUCCESS: {
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
		default: {
			return state;
		}
	}
}

export const getBookmarkedJobEntities = (state: State) => state.entities;

export const getBookmarkedJobsIds = (state: State) => state.ids;

export const getBookmarkedJobsLoaded = (state: State) => state.loaded;

export const getBookmarkedJobsLoading = (state: State) => state.loading;

export const getTotalBookmarkedJobs = (state: State) => state.pageMetaData.totalSize;

//noinspection TypeScriptValidateTypes
export const getAllBookmarkedJobs = createSelector(getBookmarkedJobEntities,
	getBookmarkedJobsIds, (entities, ids) => {
		return ids.map(id => entities[id]);
	}
);
