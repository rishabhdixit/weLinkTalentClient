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
		case candidateJobsAppliedAction.ActionTypes.SELECT: {
			return Object.assign({}, state, {
				selectedCandidateJobAppliedId: action.payload,
			});
		}
		case candidateJobsAppliedAction.ActionTypes.LOAD_DETAIL: {
			const payload = action.payload;
			const selectedCandidateJobApplied = state.entities[payload.id];
			let newSelectedCandidateJobApplied: CandidateJobsApplied = {} as CandidateJobsApplied;
			Object.assign(newSelectedCandidateJobApplied, selectedCandidateJobApplied, {
				'form_data': payload.form_data,
				'resume_url': payload.resume_url,
				'createdAt': payload.createdAt,
				'updatedAt': payload.updatedAt,
				'references_info': payload.references_info,
				'feedback': payload.feedback
			});
			return Object.assign({}, state, {
				entities: Object.assign({}, state.entities, {
					[payload.id]: newSelectedCandidateJobApplied
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
export const getSelectedCandidateJobsAppliedId = (state: State) => state.selectedCandidateJobAppliedId;
export const getIds = (state: State) => state.ids;
export const getTotalCandidateJobsApplied = (state: State) => state.pageMetaData.totalSize;

export const getSelectedCandidateJobsApplied = createSelector(
	getEntities, getSelectedCandidateJobsAppliedId, (entities, selectedCandidateJobAppliedId) => {
	return entities[selectedCandidateJobAppliedId];
});

export const getCandidateJobsApplied = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});
