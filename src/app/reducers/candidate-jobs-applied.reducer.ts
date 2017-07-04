import { CandidateJobsApplied } from '../models/candidate-jobs-applied.model';
import { PageMetaData } from '../models/page-metadata.model';
import { createSelector } from 'reselect';
import * as candidateJobsAppliedAction from '../actions/candidate-jobs-applied.action';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: { [id: string]: CandidateJobsApplied };
	selectedCandidateJobAppliedId: string;
	ids: string[];
	pageMetaData: PageMetaData;
}

const initialState: State = {
	loaded: false,
	loading: false,
	ids: [],
	entities: {},
	selectedCandidateJobAppliedId: null,
	pageMetaData: { size: 0, pageNumber: 0, totalPages: 0, totalSize: 0 }
};

export function reducer(state = initialState, action: candidateJobsAppliedAction.Actions): State {
	switch (action.type) {

		case candidateJobsAppliedAction.ActionTypes.LOAD: {
			return Object.assign({}, state, {loaded: false});
		}

		case candidateJobsAppliedAction.ActionTypes.LOAD_SUCCESS: {
			const applications = action.payload;
			const newApplicationIds = applications.applicationsList.map(application => application.id);

			const newApplicationEntities = applications.applicationsList.
				reduce((entities: { [id: string]: CandidateJobsApplied }, CandidateJobApplication: CandidateJobsApplied) => {
					return Object.assign(entities, {
						[CandidateJobApplication.id]: CandidateJobApplication
					});
				}, {});

			return {
				loaded: true,
				loading: false,
				ids: [...newApplicationIds],
				entities: Object.assign({}, {}, newApplicationEntities),
				selectedCandidateJobAppliedId: state.selectedCandidateJobAppliedId,
				pageMetaData: applications.pageMetaData
			};
		}

		default: {
			return state;
		}
	}
}

export const getEntities = (state: State) => state.entities;
export const getSelectedCandidateJobsAppliedId = (state: State) => state.selectedCandidateJobAppliedId;
export const getIds = (state: State) => state.ids;
export const getTotalCandidateJobsApplied = (state: State) => state.pageMetaData.totalSize;

export const getSelectedCandidateJobsApplied = createSelector(
	getEntities, getSelectedCandidateJobsAppliedId, (entities, selectedId) => {
	return entities[selectedId];
});

export const getCandidateJobsApplied = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});
