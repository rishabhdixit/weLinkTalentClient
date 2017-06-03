import * as lodash from 'lodash';
import { createSelector } from 'reselect';
import * as application from '../actions/job-application.action';
import { Application } from '../models/job-application.model';
import { Job } from 'app/models/job.model';
import { Reference } from '../models/reference.model';

export interface State {
	job: Job;
	application: Application;
	condition: boolean;
	reference: Reference[];
}

const initialState: State = {
	job: {} as Job,
	application: {} as Application,
	condition: false,
	reference: null,

};

export function reducer(state = initialState, action: application.Actions): State {
	switch (action.type) {
		case application.ActionType.APPLICATION_CONCEPT_LOAD:
			return Object.assign({}, state, {
				job: action.payload
			});
		case application.ActionType.APPLICATION_CONCEPT_ACCEPT:
		case application.ActionType.APPLICATION_FORM_LOAD:
			return Object.assign({}, state, {
				condition: action.payload
			});
		case application.ActionType.APPLICATION_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				application: action.payload
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				reference: action.payload.references_info
			});
		default:
			return state;
	}
}


export const getApplicationJob = (state: State) => state.job;
export const getApplicationForm = (state: State) => state.application;
export const getApplicationFormReference = (state: State) => state.reference;
export const getCondition = (state: State) => state.condition;

//noinspection TypeScriptValidateTypes
export const IsValidApplicationForm = createSelector(getApplicationJob, getCondition, (job, condition) => {
	return job && condition;
});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationFormReference = createSelector(getApplicationJob, getApplicationForm,
	getCondition, (job, application, condition) => {
		return job && application && condition;
	});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationThankYouPage = createSelector(getApplicationJob, getApplicationForm,
	getApplicationFormReference, getCondition, (job, application, reference, condition) => {
		return job && application && reference && condition;
	});
