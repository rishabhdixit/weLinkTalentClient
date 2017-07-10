import { Job } from '../models/job.model';
import { PageMetaData } from '../models/page-metadata.model';
import { createSelector } from 'reselect';
import * as candidateBookmarked from '../actions/candidate-bookmarked-jobs.action';

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

export function reducer(state = initialState, action: candidateBookmarked.Actions): State {
	switch (action.type) {
		case candidateBookmarked.ActionTypes.LOAD: {
			return Object.assign({}, state, {
				loading: true,
				selectedJobId: null,
			});
		}
		case candidateBookmarked.ActionTypes.LOAD_SUCCESS: {
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

export const getCandidateBookmarkedJobEntities = (state: State) => state.entities;

export const getCandidateBookmarkedJobsIds = (state: State) => state.ids;

export const getCandidateBookmarkedJobsLoaded = (state: State) => state.loaded;

export const getCandidateBookmarkedJobsLoading = (state: State) => state.loading;

export const getTotalCandidateBookmarkedJobs = (state: State) => state.pageMetaData.totalSize;

//noinspection TypeScriptValidateTypes
export const getAllCandidateBookmarkedJobs = createSelector(getCandidateBookmarkedJobEntities,
	getCandidateBookmarkedJobsIds, (entities, ids) => {
		return ids.map(id => entities[id]);
	}
);
