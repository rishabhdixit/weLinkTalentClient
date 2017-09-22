import { JobsApplied } from '../models/jobs-applied.model';
import { PageMetaData } from '../models/page-metadata.model';
import { createSelector } from 'reselect';
import * as jobsAppliedAction from '../actions/jobs-applied.action';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: { [id: string]: JobsApplied };
	selectedJobAppliedId: string;
	jobApplication: JobsApplied;
	ids: string[];
	pageMetaData: PageMetaData;
}

const initialState: State = {
	loaded: false,
	loading: false,
	ids: [],
	entities: {},
	selectedJobAppliedId: null,
	jobApplication: null,
	pageMetaData: { size: 0, pageNumber: 0, totalPages: 0, totalSize: 0 }
};

export function reducer(state = initialState, action: jobsAppliedAction.Actions): State {
	switch (action.type) {

		case jobsAppliedAction.ActionTypes.LOAD: {
			return Object.assign({}, state, { loaded: false });
		}
		case jobsAppliedAction.ActionTypes.LOAD_SUCCESS: {
			const applications = action.payload;
			const newApplicationIds = applications.applicationsList.map(application => application.id);

			const newApplicationEntities = applications.applicationsList.
				reduce((entities: { [id: string]: JobsApplied }, jobsApplied: JobsApplied) => {
					return Object.assign(entities, {
						[jobsApplied.id]: jobsApplied
					});
				}, {});

			return {
				loaded: true,
				loading: false,
				ids: [...newApplicationIds],
				entities: Object.assign({}, {}, newApplicationEntities),
				jobApplication: state.jobApplication,
				selectedJobAppliedId: state.selectedJobAppliedId,
				pageMetaData: applications.pageMetaData
			};
		}
		case jobsAppliedAction.ActionTypes.SELECT: {
			return Object.assign({}, state, {
				selectedJobAppliedId: action.payload,
			});
		}
		case jobsAppliedAction.ActionTypes.LOAD_DETAIL: {
			const payload = action.payload;
			const selectedCandidateJobApplied = state.entities[payload.id];
			let newSelectedCandidateJobApplied: JobsApplied = {} as JobsApplied;
			Object.assign(newSelectedCandidateJobApplied, selectedCandidateJobApplied, {
				'form_data': payload.form_data,
				'resume_urls': payload.resume_urls,
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
		case jobsAppliedAction.ActionTypes.APPLICATION_APPLY_SUCCESS: {
			const payload = action.payload;
			const selectedCandidateJobApplied = state.entities[payload.id];
			let newSelectedCandidateJobApplied: JobsApplied = {} as JobsApplied;
			Object.assign(newSelectedCandidateJobApplied, selectedCandidateJobApplied, {
				'application_status': payload.application_status,
				'applied_by_candidate': payload.applied_by_candidate,
				'updatedAt': payload.updatedAt
			});
			return Object.assign({}, state, {
				entities: Object.assign({}, state.entities, {
					[payload.id]: newSelectedCandidateJobApplied
				}),
				loaded: true
			});
		}
		case jobsAppliedAction.ActionTypes.APPLICATION_REQUEST_FEEDBACK_RECRUITER_SUCCESS: {
			const payload = action.payload;
			const selectedCandidateJobApplied = state.entities[payload.id];
			let newSelectedCandidateJobApplied: JobsApplied = {} as JobsApplied;
			Object.assign(newSelectedCandidateJobApplied, selectedCandidateJobApplied, {
				'recruiter_feedback_requested': payload.recruiter_feedback_requested,
				'updatedAt': payload.updatedAt
			});
			return Object.assign({}, state, {
				entities: Object.assign({}, state.entities, {
					[payload.id]: newSelectedCandidateJobApplied
				}),
				loaded: true
			});
		}
		case jobsAppliedAction.ActionTypes.APPLICATION_REQUEST_FEEDBACK_REFEREE_SUCCESS: {
			const payload = action.payload;
			const selectedCandidateJobApplied = state.entities[payload.id];
			let newSelectedCandidateJobApplied: JobsApplied = {} as JobsApplied;
			Object.assign(newSelectedCandidateJobApplied, selectedCandidateJobApplied, {
				'referee_feedback_requested': payload.referee_feedback_requested,
				'updatedAt': payload.updatedAt
			});
			return Object.assign({}, state, {
				entities: Object.assign({}, state.entities, {
					[payload.id]: newSelectedCandidateJobApplied
				}),
				loaded: true
			});
		}
		case jobsAppliedAction.ActionTypes.LOAD_APPLICATION_BY_ID_SUCCESS: {
			return Object.assign({}, state, {
				jobApplication: action.payload,
			});
		}

		default: {
			return state;
		}
	}
}

export const getEntities = (state: State) => state.entities;
export const getSelectedJobsAppliedId = (state: State) => state.selectedJobAppliedId;
export const getIds = (state: State) => state.ids;
export const getTotalJobsApplied = (state: State) => state.pageMetaData.totalSize;
export const getJobApplication = (state: State) => state.jobApplication;

export const getSelectedJobsApplied = createSelector(
	getEntities, getSelectedJobsAppliedId, (entities, selectedJobAppliedId) => {
		return entities[selectedJobAppliedId];
	});

export const getJobsApplied = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});
